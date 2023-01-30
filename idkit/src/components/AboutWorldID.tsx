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
			<p className="text-0d151d text-sm font-medium uppercase dark:text-white">What is World ID?</p>
			<div className="space-y-3">
				<FeatureHighlight title="Proving unique-humanness" icon={HumanIcon}>
					<p>Human is doing an action only once.</p>
					<p>Stop bots, stop abouse.</p>
				</FeatureHighlight>
				<FeatureHighlight title="Completely private" icon={LockIcon}>
					<p>Using Zero-knowledge proofs so no traceable information is ever public.</p>
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
		<div className="bg-d3dfea/30 dark:bg-29343f flex aspect-square h-8 w-8 items-center justify-center rounded-full">
			<Icon className="text-0d151d h-3 w-3 dark:text-white" />
		</div>
		<div>
			<p className="text-0d151d font-medium dark:text-white">{title}</p>
			<div className="text-9eafc0 dark:text-9eafc0 mt-[2px] text-sm font-normal">{children}</div>
		</div>
	</div>
)

export default AboutWorldID
