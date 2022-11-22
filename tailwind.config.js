const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['RubikVariable', ...defaultTheme.fontFamily.sans],
			},
			data: {
				selected: 'headlessui-state~="selected"',
				active: 'headlessui-state~="active"',
				'selected-active': 'headlessui-state="active selected"',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
