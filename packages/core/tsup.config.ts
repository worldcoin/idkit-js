import { defineConfig } from 'tsup'

export default defineConfig({
	dts: true,
	clean: true,
	format: 'esm',
	outDir: 'build',
	external: ['zustand', 'viem'],
	entry: ['src/index.ts', 'src/lib/hashing.ts'],
	define: { 'process.env.NODE_ENV': '"production"' },
})
