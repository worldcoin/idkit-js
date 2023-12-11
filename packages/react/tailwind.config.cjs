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
		fontSize: {
			xs: ['12px', { lineHeight: '16px' }],
			sm: ['14px', { lineHeight: '20px' }],
			base: ['16px', { lineHeight: '24px' }],
			lg: ['18px', { lineHeight: '28px' }],
			xl: ['20px', { lineHeight: '28px' }],
			'2xl': ['24px', { lineHeight: '32px' }],
			'3xl': ['30px', { lineHeight: '36px' }],
			'4xl': ['36px', { lineHeight: '36px' }],
			'5xl': ['48px', { lineHeight: '1' }],
			'6xl': ['60px', { lineHeight: '1' }],
			'7xl': ['72px', { lineHeight: '1' }],
			'8xl': ['96px', { lineHeight: '1' }],
			'9xl': ['144px', { lineHeight: '1' }],
		},
		spacing: {
			px: '1px',
			0: '0',
			0.5: '2px',
			1: '4px',
			1.5: '6px',
			2: '8px',
			2.5: '10px',
			3: '12px',
			3.5: '14px',
			4: '16px',
			5: '20px',
			6: '24px',
			7: '28px',
			8: '32px',
			9: '36px',
			10: '40px',
			11: '44px',
			12: '48px',
			14: '56px',
			16: '64px',
			20: '80px',
			24: '96px',
			28: '112px',
			32: '128px',
			36: '144px',
			40: '160px',
			44: '176px',
			48: '192px',
			52: '208px',
			56: '224px',
			60: '240px',
			64: '256px',
			72: '288px',
			80: '320px',
			96: '384px',
		},
		maxWidth: {
			none: 'none',
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			prose: '65ch',
			md: '448px',
		},
		extend: {
			lineHeight: {
				3: '12px',
				4: '16px',
				5: '20px',
				6: '24px',
				7: '28px',
				8: '32px',
				9: '36px',
				10: '40px',
			},
			screens: {
				xs: '414px',
				...defaultTheme.screens,
			},
			colors: {
				...mirrorHexColors([
					'#0d151d',
					'#1e40af',
					'#29343f',
					'#3c424b',
					'#4940e0',
					'#596673',
					'#657080',
					'#70868f',
					'#9ba3ae',
					'#9eafc0',
					'#d3dfea',
					'#e5e7eb',
					'#ebecef',
					'#ece8fb',
					'#f1f5f8',
					'#f2f5f9',
					'#f5f5f7',
				]),
			},
			backgroundImage: {
				'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
			},
			fontFamily: {
				sora: ['Sora', ...defaultTheme.fontFamily.sans],
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
