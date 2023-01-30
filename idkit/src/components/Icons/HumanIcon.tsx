import type { FC, HTMLAttributes } from 'react'

const HumanIcon: FC<HTMLAttributes<SVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
		<path
			fill="#0D151D"
			d="M9.98 3.6c-.08-.345-.392-.553-.732-.477-.093.021-2.59.754-4.236.768C3.36 3.877.87 3.144.776 3.123a.629.629 0 0 0-.76.477.64.64 0 0 0 .467.767c.433.111 1.139.318 2.83.72 0 0-.02 2.28-.093 3.663-.1 1.99-.672 4.424-.672 4.424-.1.463.126.74.406.801.573.125.76-.276.826-.56l1.092-4.16A.128.128 0 0 1 5 9.164c.053 0 .106.027.126.09l1.093 4.16c.066.284.253.685.825.56.28-.062.507-.338.407-.801 0 0-.566-2.433-.673-4.424-.073-1.383-.093-3.664-.093-3.664 1.698-.4 2.398-.608 2.83-.719a.637.637 0 0 0 .467-.767Z"
		/>
		<path
			fill="#0D151D"
			d="M5.007 3.11a1.55 1.55 0 0 0 1.539-1.555C6.546.698 5.86 0 5.007 0A1.55 1.55 0 0 0 3.47 1.555c0 .857.686 1.555 1.538 1.555Z"
		/>
	</svg>
)

export default HumanIcon
