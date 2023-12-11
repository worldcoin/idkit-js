import { __ } from '@/lang'
import LockIcon from './Icons/LockIcon'
import { classNames } from '@/lib/utils'
import HumanIcon from './Icons/HumanIcon'
import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

type Props = {
	className?: string
}

const AboutWorldID: FC<Props> = ({ className }) => {
	return (
		<div className={classNames(className, 'space-y-4 text-left')}>
			<p className="text-sm font-medium uppercase text-0d151d dark:text-white">{__('What is World ID?')}</p>
			<div className="space-y-3">
				<FeatureHighlight title="Your global digital ID" icon={HumanIcon}>
					<p>{__('With Worldcoin and World ID sign in seamlessly and prove you are a unique human.')}</p>
				</FeatureHighlight>
				<FeatureHighlight title="Privacy-preserving" icon={LockIcon}>
					<p>{__('Maximum privacy. Prevents cross-tracking and can be used fully anonymously.')}</p>
				</FeatureHighlight>
			</div>
		</div>
	)
}

type FeatureHighlightProps = PropsWithChildren<{
	title: string
	icon: FC<HTMLAttributes<SVGElement>>
}>

const FeatureHighlight: FC<FeatureHighlightProps> = ({ icon: Icon, title, children }) => (
	<div className="flex space-x-6">
		<div className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-d3dfea/30 dark:bg-29343f">
			<Icon className="h-3 w-3 text-0d151d dark:text-white" />
		</div>
		<div>
			<p className="font-medium text-0d151d dark:text-white">{title}</p>
			<div className="mt-[2px] text-sm font-normal text-9eafc0 dark:text-9eafc0">{children}</div>
		</div>
	</div>
)

export default AboutWorldID
