import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react', 
    'react-native',
    'idkit-core',
    'buffer',
    'js-sha3',
    'react-native-get-random-values',
    'text-encoding',
    'react-native-webcrypto',
    'expo-crypto',
    'ethers',
    'zustand',
    /node_modules/
  ],
  noExternal: [],
  // Ensure Zustand is imported correctly
  esbuildOptions(options) {
    options.define = {
      ...options.define,
      'process.env.NODE_ENV': JSON.stringify('production')
    }
    options.mainFields = ['module', 'main']
    return options
  }
})