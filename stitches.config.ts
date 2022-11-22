import { createStitches } from '@stitches/react'
export type { CSS } from '@stitches/react/types/css-util'

export const stitches = createStitches({
	prefix: '',
	theme: {},
	utils: {},
})

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches
