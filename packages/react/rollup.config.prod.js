import image from '@rollup/plugin-image'
import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import packageJson from './package.json' assert { type: 'json' }

export default [
	{
		input: ['./src/index.ts'],
		external: ['react', 'react-dom', 'framer-motion', 'posthog-js-lite', 'zustand', 'zustand/shallow', 'qrcode'],
		output: [{ file: packageJson.exports.import, format: 'esm', sourcemap: true, preserveModules: true }],
		plugins: [
			peerDepsExternal(),
			image(),
			typescript({
				useTsconfigDeclarationDir: true,
				exclude: 'node_modules/**',
			}),
		],
	},
]
