import '@fontsource/rubik/variable.css'
import { globalCss } from '@/../stitches.config'
import tw, { theme, globalStyles } from 'twin.macro'

const customStyles = {
	body: {
		WebkitTapHighlightColor: theme`colors.indigo.500`,
		...tw`antialiased`,
	},
}

const styles = () => {
	globalCss(customStyles)()
	globalCss(globalStyles as Record<any, any>)()
}

export default styles
