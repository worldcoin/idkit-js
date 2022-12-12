module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	ignorePatterns: ['.eslintrc.cjs', '/build'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:compat/recommended',
		'plugin:tailwindcss/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.cjs'],
	},
	rules: {
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'off',
		'no-empty': ['error', { allowEmptyCatch: true }],

		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-misused-promises': 'warn',

		// not included into recommended set rules
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
		'@typescript-eslint/require-await': 'off',
		'sort-imports': 'off', // we use TypeScripts' organize imports feature
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'warn',
		'@typescript-eslint/non-nullable-type-assertion-style': 'warn',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false }],
		'@typescript-eslint/sort-type-union-intersection-members': 'warn',

		'jsx-a11y/media-has-caption': 0,

		// not enforced by prettier
		'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],

		'tailwindcss/classnames-order': [
			'warn',
			{
				officialSorting: true,
			},
		],
	},

	settings: {
		react: {
			version: 'detect',
		},

		tailwindcss: {
			config: require.resolve('./tailwind.config.cjs'),
		},

		polyfills: ['fetch'],
	},
}
