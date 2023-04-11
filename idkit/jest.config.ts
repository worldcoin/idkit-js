/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { PackageJson } from 'type-fest'
import * as packageJson from './package.json'
const { version }: Pick<PackageJson, 'version'> = packageJson

export default {
	// Automatically clear mock calls, instances, contexts and results before every test
	clearMocks: true,
	// An array of file extensions your modules use
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	roots: ['<rootDir>/tests'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: {
		'.(js|jsx|ts|tsx)$': [
			'esbuild-jest',
			{
				sourcemap: true,
			},
		],
	},
	globals: {
		IDKitVersion: version,
	},
}
