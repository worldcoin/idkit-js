import { classNames } from '@/lib/utils'
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'

const Button = forwardRef(
	({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>, ref: ForwardedRef<HTMLButtonElement>) => (
		<button
			{...props}
			ref={ref}
			className={classNames(
				className,
				'inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
			)}
		/>
	)
)

export default Button
