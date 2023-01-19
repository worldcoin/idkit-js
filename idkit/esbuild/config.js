import fs from 'fs'
import 'dotenv/config'
import { createRequire } from 'node:module'
import { transformFileAsync as babelTransformFileAsync } from '@babel/core'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

const require = createRequire(import.meta.url)

const packageJson = require('../package.json')

if (!process.env.WALLETCONNECT_PID) {
	console.error(
		'\x1b[1m\x1b[5m\x1b[31mWALLETCONNECT_PID\x1b[0m environment variable is required to build this project'
	)
	console.error('Set one either explicitly or create an .env file (see .env.sample)')
	process.exit(1)
}

/**
 * @type {import('esbuild').Plugin}
 */
const babelTransforms = {
	name: 'babelTransformations',
	setup(build) {
		if (!build.initialOptions.minify) return

		build.onLoad({ filter: /\.tsx/i }, async args => {
			const result = await babelTransformFileAsync(args.path, {
				plugins: [['@babel/plugin-syntax-typescript', { isTSX: true }]],
				configFile: false,
				babelrc: false,
			})
			return { contents: result.code, loader: 'tsx' }
		})
	},
}

const styleLoader = {
	name: 'style',
	setup(build) {
		build.onLoad({ filter: /\.css$/ }, async args => {
			const contents = await fs.promises.readFile(args.path, 'utf8')
			return {
				contents: `
					const styles = \`${contents.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\`
					export default () => (<style>{styles}</style>)
                `,
				loader: 'jsx',
			}
		})
	},
}

export default /** @type {import('esbuild').BuildOptions} */ ({
	bundle: true,
	loader: { '.svg': 'dataurl', '.png': 'dataurl', '.woff2': 'dataurl' },
	logLevel: 'info',
	define: {
		global: 'globalThis',
		IDKitVersion: JSON.stringify(packageJson.version),
		'process.env.WALLETCONNECT_PID': `"${process.env.WALLETCONNECT_PID}"`,
	},
	entryPoints: [require.resolve('../src/index.ts')],
	globalName: 'IDKit',
	inject: [require.resolve('./react-shim.js')],
	target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
	plugins: [
		styleLoader,
		NodeGlobalsPolyfillPlugin({
			process: false,
			buffer: true,
		}),
		babelTransforms,
	],
})
