import { defineConfig } from 'tsup'

export default defineConfig({
	dts: true,
	clean: true,
	format: ['iife', 'cjs'],
	outDir: 'build',
	entry: ['src/index.tsx'],
	define: { 'process.env.NODE_ENV': '"production"' },
})
