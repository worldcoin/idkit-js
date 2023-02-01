const defaultTheme = require('tailwindcss/defaultTheme')

const mirrorHexColors = colors =>
	Object.fromEntries(
		colors.map((color, index) => {
			if (!/#[a-f0-9]{6}/.test(color)) {
				throw new Error(
					'All colors should be lowercase hexadecimal strings 7 characters long with "#" sign at the beginning'
				)
			}

			if (colors.indexOf(color) !== index) {
				throw new Error('Colors should be unique')
			}

			if (colors[index - 1] > color) {
				throw new Error('Colors should be sorted alphabetically')
			}

			return [color.substring(1), color]
		})
	)

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '414px',
				...defaultTheme.screens,
			},
			colors: {
				...mirrorHexColors([
					'#0d151d',
					'#1e40af',
					'#28303f',
					'#29343f',
					'#4940e0',
					'#596673',
					'#5b52f3',
					'#6445dd',
					'#70868f',
					'#9eafc0',
					'#d3dfea',
					'#e5e7eb',
					'#ece8fb',
					'#f1f5f8',
					'#f2f5f9',
					'#ff6848',
				]),
			},
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
			},
			data: {
				selected: 'headlessui-state~="selected"',
				active: 'headlessui-state~="active"',
				'selected-active': 'headlessui-state="active selected"',
			},
			opacity: {
				15: '.15',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
