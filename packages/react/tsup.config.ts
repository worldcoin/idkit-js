import { defineConfig } from 'tsup'
import packageJson from './package.json' assert { type: 'json' }

export default defineConfig({
	dts: true,
	clean: true,
	format: 'esm',
	outDir: 'build',
	loader: { '.css': 'text' },
	entry: ['src/index.ts', 'src/internal.ts'],
	define: {
		'process.env.NODE_ENV': '"production"',
		IDKitVersion: JSON.stringify(packageJson.version),
	},
})
