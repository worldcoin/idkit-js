import { defineConfig } from 'tsup'

export default defineConfig({
	dts: true,
	clean: true,
	format: 'esm',
	outDir: 'build',
	external: ['viem'],
	entry: ['src/index.ts', 'src/lib/hashing.ts'],
})
