import clsx from 'clsx'
import { __ } from '@/lang'
import CheckIcon from '@/components/Icons/CheckIcon'

const SuccessState = (props: { show_modal?: boolean }) => {
	return (
		<div className="space-y-6">
			<div className={clsx('flex items-center justify-center', props.show_modal ? '-mt-5' : '')}>
				<CheckIcon className="w-24 text-white" />
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">{__('All set!')}</p>
				<p className="mx-auto mt-2 max-w-[260px] text-center text-lg text-657080">
					{__('Your World ID is now connected')}
				</p>
			</div>
		</div>
	)
}

export default SuccessState
