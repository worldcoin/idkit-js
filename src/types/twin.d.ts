import 'twin.macro'
import { css as cssImport } from '@stitches/react'
import type Util from '@stitches/react/types/util'
import type { CSS as StitchesCSS } from '@stitches/react'
import type CSSUtil from '@stitches/react/types/css-util'
import type StyledComponent from '@stitches/react/types/styled-component'
import { stitches as config, css as cssImport, styled as stitchesStyled } from '../stitches.config'

// Support a css prop when used with twins styled.div({}) syntax
type CSSProp = StitchesCSS<typeof config>

type Media = typeof config.media
type Theme = typeof config.theme
type ThemeMap = typeof config.themeMap
type Utils = typeof config.utils

type Styled<Type> = {
	<
		Composers extends (string | React.ComponentType<unknown> | Util.Function | { [name: string]: unknown })[],
		CSS = CSSUtil.CSS<Media, Theme, ThemeMap, Utils>
	>(
		...composers: {
			[K in keyof Composers]: string extends Composers[K] // Strings, React Components, and Functions can be skipped over
				? Composers[K]
				: Composers[K] extends string | React.ComponentType<unknown> | Util.Function
				? Composers[K]
				: RemoveIndex<CSS> & {
						/** The **variants** property lets you set a subclass of styles based on a key-value pair.
						 *
						 * [Read Documentation](https://stitches.dev/docs/variants)
						 */
						variants?: {
							[_Name in string]: {
								[_Pair in number | string]: CSS
							}
						}
						/** The **compoundVariants** property lets you to set a subclass of styles based on a combination of active variants.
						 *
						 * [Read Documentation](https://stitches.dev/docs/variants#compound-variants)
						 */
						compoundVariants?: (('variants' extends keyof Composers[K]
							? {
									[Name in keyof Composers[K]['variants']]?:
										| Util.Widen<keyof Composers[K]['variants'][Name]>
										| Util.String
							  }
							: Util.WideObject) & {
							css: CSS
						})[]
						/** The **defaultVariants** property allows you to predefine the active key-value pairs of variants.
						 *
						 * [Read Documentation](https://stitches.dev/docs/variants#default-variants)
						 */
						defaultVariants?: 'variants' extends keyof Composers[K]
							? {
									[Name in keyof Composers[K]['variants']]?:
										| Util.Widen<keyof Composers[K]['variants'][Name]>
										| Util.String
							  }
							: Util.WideObject
				  } & CSS & {
							[K2 in keyof Composers[K]]: K2 extends 'compoundVariants' | 'defaultVariants' | 'variants'
								? unknown
								: K2 extends keyof CSS
								? CSS[K2]
								: unknown
						}
		}
	): StyledComponent.StyledComponent<
		Type,
		StyledComponent.StyledComponentProps<Composers>,
		Media,
		CSSUtil.CSS<Media, Theme, ThemeMap, Utils>
	>
}

declare module 'react' {
	// The css prop
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		css?: CSSProp
		tw?: string
	}
	// The inline svg css prop
	interface SVGProps<T> extends SVGProps<SVGSVGElement> {
		css?: CSSProp
		tw?: string
	}
}

// Support twins styled.div({}) syntax
type StyledTags = {
	[Tag in keyof JSX.IntrinsicElements]: Styled<Tag>
}

declare module 'twin.macro' {
	// The styled and css imports
	const styled: StyledTags & typeof stitchesStyled
	const css: typeof cssImport
}
