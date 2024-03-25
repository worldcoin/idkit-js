import { defineConfig } from 'tsup'

export default defineConfig({
	dts: true,
	clean: true,
	outDir: 'build',
	format: ['esm', 'cjs'],
	external: ['zustand', 'viem'],
	entry: ['src/index.ts', 'src/lib/hashing.ts', 'src/lib/backend.ts'],
	define: { 'process.env.NODE_ENV': '"production"' },
})
