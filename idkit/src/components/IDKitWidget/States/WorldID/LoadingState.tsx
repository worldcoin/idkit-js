import LoadingIcon from '@/components/Icons/LoadingIcon'

const LoadingState = () => {
	return (
		<div className="flex flex-col items-center justify-center space-y-12 pb-10">
			<LoadingIcon className="h-20 w-20" />
			<div className="space-y-4">
				<p className="mx-auto max-w-[15rem] text-center text-3xl font-semibold text-black dark:text-white">
					Confirm on the Worldcoin app
				</p>
				<p className="mx-auto max-w-xs text-lg text-gray-400 dark:text-gray-600">
					Please confirm the request inside the Worldcoin app to continue.
				</p>
			</div>
		</div>
	)
}

export default LoadingState
