import iife from 'rollup-plugin-iife'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json' assert { type: 'json' }

export default [
	{
		input: ['./src/index.tsx'],
		external: [],
		output: [{ file: packageJson.exports.import, format: 'esm', sourcemap: false }],
		plugins: [
			typescript({
				useTsconfigDeclarationDir: true,
				exclude: 'node_modules/**',
			}),
			iife(),
		],
	},
]
