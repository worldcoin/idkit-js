import clsx from 'clsx'
import i18n from '@/lang/i18n'
import CheckIcon from '@/components/Icons/CheckIcon'

const SuccessState = (props: { show_modal?: boolean }) => {
	return (
		<div className="space-y-6">
			<div className={clsx('flex items-center justify-center', props.show_modal ? '-mt-5' : '')}>
				<CheckIcon className="w-24 text-white" />
			</div>
			<div>
				<p className="text-center text-2xl font-semibold text-gray-900 dark:text-white">
					{i18n.t('successfully-verified')}
				</p>
				<p className="mx-auto mt-2 max-w-[224px] text-center text-lg text-657080">
					{i18n.t('verification-successful')}
				</p>
			</div>
		</div>
	)
}

export default SuccessState
