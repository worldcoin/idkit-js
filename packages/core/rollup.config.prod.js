import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import packageJson from './package.json' assert { type: 'json' }

export default [
	{
		input: ['./src/index.ts'],
		external: ['viem', 'zustand'],
		output: [{ file: packageJson.exports.import, format: 'esm', sourcemap: true }],
		plugins: [
			peerDepsExternal(),
			typescript({
				useTsconfigDeclarationDir: true,
				exclude: 'node_modules/**',
			}),
		],
	},
]
