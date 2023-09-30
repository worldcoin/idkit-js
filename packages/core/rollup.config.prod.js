import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
	{
		input: ['./src/index.ts'],
		external: ['viem', 'zustand'],
		output: [{ dir: './build', format: 'esm', sourcemap: true }],
		plugins: [
			peerDepsExternal(),
			typescript({
				useTsconfigDeclarationDir: true,
				exclude: 'node_modules/**',
			}),
		],
	},
]
