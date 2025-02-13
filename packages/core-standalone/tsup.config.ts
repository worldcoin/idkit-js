import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	outDir: 'dist',
	format: ['iife'],
	globalName: 'WorldcoinIDKitCore', // Important for IIFE
	dts: true,
	clean: true,
	define: {
		'process.env.NODE_ENV': '"production"',
		'React': `{
			useRef: (initialValue) => ({ current: initialValue }),
			useState: (initialValue) => [initialValue, () => {}],
			useEffect: () => {},
			useContext: () => null,
		}`,
		'ReactDOM': `{}`, // Add mocks for ReactDOM if needed
	},
})
