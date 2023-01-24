import meow from 'meow'
import esbuild from 'esbuild'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
import fs from 'fs'
import config from './config.js'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postCssPlugin from 'esbuild-style-plugin'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

const cli = meow({
	flags: { platform: { type: 'string', alias: 'p', isRequired: true } },
	importMeta: import.meta,
})

/** @type {import('esbuild').BuildOptions} */
const baseConfig = {
	...config,
	minify: true,
	treeShaking: true,
	define: {
		...config.define,
		'process.env.NODE_ENV': "'production'",
		'import.meta.env': '{ "MODE": "production" }',
	},
	metafile: true,
}

/** @type {Record<string, import('esbuild').BuildOptions>} */
const configs = {
	esm: {
		...baseConfig,

		entryPoints: [require.resolve('../src/index.ts')],
		define: {
			...baseConfig.define,
			window: 'globalThis',
		},
		plugins: [
			...baseConfig.plugins,

			nodeExternalsPlugin({
				packagePath: require.resolve('../package.json'),
			}),
			postCssPlugin({
				postcss: {
					plugins: [tailwind, autoprefixer],
				},
			}),
		],
		sourcemap: true,
		format: 'esm',
		outfile: 'build/index.js',
	},

	iife: {
		...baseConfig,

		entryPoints: [require.resolve('../src/vanilla.tsx')],
		format: 'iife',
		globalName: 'IDKit',
		outfile: 'build/idkit-js.js',
	},
}

if (!configs[cli.flags.platform]) {
	console.error(`Unknown platform. Use one of ${Object.keys(configs)}`)
}

try {
	const result = await esbuild.build(configs[cli.flags.platform])
	fs.writeFileSync('esbuild-meta.json', JSON.stringify(result.metafile))
} catch (error) {
	console.error(error)
	process.exit(1)
}
