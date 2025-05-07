import { defineConfig } from 'tsup'

export default defineConfig({
	dts: true,
	clean: true,
	outDir: 'build',
	format: ['esm', 'cjs'],
	external: ['zustand', 'ox'],
	entry: ['src/index.ts'],
	define: { 'process.env.NODE_ENV': '"production"' },
})
