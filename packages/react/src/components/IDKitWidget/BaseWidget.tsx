import { __ } from '@/lang'
import type { FC } from 'react'
import root from 'react-shadow'
import ReactDOM from 'react-dom'
import { IDKITStage } from '@/types'
import Styles from '@/components/Styles'
import useIDKitStore from '@/store/idkit'
import { shallow } from 'zustand/shallow'
import { useEffect, useMemo } from 'react'
import XMarkIcon from '../Icons/XMarkIcon'
import ErrorState from './States/ErrorState'
import { ConfigSource } from '@/types/config'
import * as Toast from '@radix-ui/react-toast'
import type { IDKitStore } from '@/store/idkit'
import SuccessState from './States/SuccessState'
import WorldIDState from './States/WorldIDState'
import type { WidgetProps } from '@/types/config'
import WorldcoinIcon from '../Icons/WorldcoinIcon'
import HostAppVerificationState from './States/HostAppVerificationState'

const getParams = ({ open, processing, onOpenChange, stage, setStage, setOptions }: IDKitStore) => ({
	stage,
	setStage,
	processing,
	setOptions,
	isOpen: open,
	onOpenChange,
})

const IDKitWidget: FC<WidgetProps> = ({ children, showModal = false, containerId, ...config }) => {
	const { onOpenChange, stage, setOptions } = useIDKitStore(getParams, shallow)

	useEffect(() => {
		if (config.action === '') {
			throw new Error(__('Action cannot be an empty string.'))
		}
		setOptions(config, ConfigSource.PROPS)
	}, [config, setOptions])

	const StageContent = useMemo(() => {
		switch (stage) {
			case IDKITStage.WORLD_ID:
				return <WorldIDState showModal={showModal} />
			case IDKITStage.SUCCESS:
				return <SuccessState />
			case IDKITStage.ERROR:
				return <ErrorState />
			case IDKITStage.HOST_APP_VERIFICATION:
				return <HostAppVerificationState />
			default:
				throw new Error(__('Invalid IDKitStage :stage.', { stage }))
		}
	}, [stage, showModal])

	const widgetContent = (
		<root.div mode="open" id="idkit-widget">
			<Styles />
			<Toast.Provider>
				<Toast.Viewport className="flex justify-center" />
				<div
					id="widget-content-inline"
					className="relative flex flex-col bg-white p-4 focus:outline-none dark:bg-0d151d"
				>
					{StageContent}
				</div>
			</Toast.Provider>
		</root.div>
	)

	if (!showModal && containerId) {
		const containerElement = document.getElementById(containerId)
		if (containerElement) {
			return ReactDOM.createPortal(widgetContent, containerElement)
		}
		console.warn(`Container element with id "${containerId}" not found. Rendering widget inline.`)
	}

	return (
		<root.div mode="open" id="idkit-widget">
			<Styles />
			<Toast.Provider>
				<Toast.Viewport className="flex justify-center" />
				<div
					id="widget-content-modal"
					className="relative z-50 flex min-h-screen w-full flex-col bg-white pt-6 shadow focus:outline-none dark:bg-0d151d"
				>
					{/* Close Button (only in modal mode) */}
					<div className="mx-6 mb-12 flex items-center justify-between">
						<button
							type="button"
							onClick={() => onOpenChange(false)}
							className="flex items-center justify-center rounded-full text-black dark:text-white"
						>
							<XMarkIcon className="size-5" />
						</button>
					</div>

					{/* Main stage content */}
					<div className="relative mx-6 mb-6 flex flex-1 flex-col items-center justify-center">
						{StageContent}
					</div>

					{/* Footer */}
					<div className="flex items-center justify-between border-t border-f5f5f7 p-7">
						<a
							href="https://worldcoin.org/world-id"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1 text-sm text-9eafc0"
						>
							<WorldcoinIcon className="w-4 text-9eafc0 dark:text-white" />
							<span>{__('Powered by Worldcoin')}</span>
						</a>
						<a
							href="https://developer.worldcoin.org/privacy-statement"
							target="_blank"
							rel="noreferrer"
							className="text-sm text-9eafc0 hover:underline"
						>
							{__('Terms & Privacy')}
						</a>
					</div>
				</div>
			</Toast.Provider>
		</root.div>
	)
}

export default IDKitWidget
