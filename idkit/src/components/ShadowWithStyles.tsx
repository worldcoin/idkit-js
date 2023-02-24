import root from 'react-shadow'
import Styles from '@build/index.css'
import type { FC, HTMLAttributes } from 'react'

const ShadowWithStyles: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
	<root.div mode="open" {...props}>
		<Styles />
		<>{children}</>
	</root.div>
)

export default ShadowWithStyles
