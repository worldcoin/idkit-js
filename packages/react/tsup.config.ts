import { defineConfig } from 'tsup'
import packageJson from './package.json' assert { type: 'json' }

export default defineConfig({
	dts: true,
	clean: true,
	format: 'esm',
	outDir: 'build',
	entry: ['src/index.ts', 'src/internal.ts'],
	define: {
		IDKitVersion: JSON.stringify(packageJson.version),
	},
})
