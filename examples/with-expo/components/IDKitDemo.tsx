import { createURL } from 'expo-linking'
import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Linking } from 'react-native'
import { AppErrorCodes, ISuccessResult, Session, SessionStatus, VerificationState } from '@worldcoin/idkit-react-native'

const APP_ID = 'app_020c82fbf3c087eb31600929a34990e4'
const ACTION = 'test-action-1'

type UiStatus = {
	state: VerificationState
	result?: ISuccessResult | null
	errorCode?: AppErrorCodes | null
}

export function IDKitDemo() {
	const [status, setStatus] = useState<UiStatus>({
		state: VerificationState.PreparingClient,
		result: null,
		errorCode: null,
	})
	const [connectUrl, setConnectUrl] = useState<string | null>(null)
	const sessionRef = useRef<Session | null>(null)

	// Restore session state when app is focused
	useEffect(() => {
		const subscription = Linking.addEventListener('url', async ({ url }) => {
			// User returned from World App
			console.log('Detected app return:', url)

			// If we have an active session, poll for updates
			if (sessionRef.current) {
				try {
					const sessionStatus = await sessionRef.current.status()
					setStatus({
						state: sessionStatus.state,
						result: sessionStatus.result,
						errorCode: sessionStatus.errorCode,
					})
				} catch (error) {
					console.error('Error polling for updates:', error)
				}
			}
		})

		return () => subscription.remove()
	}, [])

	// Set up polling when session is active
	useEffect(() => {
		// Only start polling if session is active
		if (!sessionRef.current || status.state === VerificationState.PreparingClient) {
			console.log('exit 1', status.state)
			return
		}

		// Don't poll if we reached a terminal state
		if (status.state === VerificationState.Confirmed || status.state === VerificationState.Failed) {
			console.log('exit 2')
			return
		}

		let mounted = true
		const pollInterval = 1000 // 1 second
		let timeoutId: number

		const checkStatus = async () => {
			if (!mounted || !sessionRef.current) return

			try {
				const sessionStatus: SessionStatus = await sessionRef.current.status()

				console.log('sessionStatus', sessionStatus)

				if (!mounted) return

				// Convert the state to a string for safer comparison
				const stateString = String(sessionStatus.state)

				if (stateString === 'Confirmed') {
					if (sessionStatus.result) {
						setStatus({ state: VerificationState.Confirmed, result: sessionStatus.result })
						return // Stop polling
					}
				} else if (stateString === VerificationState.Failed) {
					setStatus({
						state: VerificationState.Failed,
						errorCode: sessionStatus.errorCode,
					})
					return // Stop polling
				} else {
					setStatus({ state: sessionStatus.state })
				}

				// Continue polling if not in terminal state
				timeoutId = setTimeout(checkStatus, pollInterval)
			} catch (error) {
				if (mounted) {
					setStatus({ state: VerificationState.Failed, errorCode: null })
				}
			}
		}

		// Start initial check
		checkStatus()

		// Cleanup function
		return () => {
			mounted = false
			clearTimeout(timeoutId)
		}
	}, [status.state])

	const handleVerify = async () => {
		try {
			setStatus({ state: VerificationState.PreparingClient })

			// Create a new session
			const session = await new Session().create(APP_ID, ACTION)
			sessionRef.current = session

			const returnTo = createURL('') // e.g., myapp://home

			// Make sure to construct the URL only after session is created
			if (session.connectorURI) {
				const connectorUrl = new URL(session.connectorURI)
				connectorUrl.searchParams.set('return_to', returnTo)
				setConnectUrl(connectorUrl.toString())

				// Open the World App if available
				Linking.canOpenURL(connectorUrl.toString()).then(supported => {
					if (supported) {
						Linking.openURL(connectorUrl.toString())
					}
				})
			}

			// Update status after setting up the session
			const sessionStatus = await session.status()
			setStatus({
				state: sessionStatus.state,
				result: sessionStatus.result,
				errorCode: sessionStatus.errorCode,
			})
		} catch (error) {
			console.error('Error creating session:', error)
			setStatus({ state: VerificationState.Failed, errorCode: null })
		}
	}

	const handleReset = () => {
		// Clean up the session
		if (sessionRef.current) {
			sessionRef.current.destroy()
		}

		sessionRef.current = null
		setConnectUrl(null)
		setStatus({
			state: VerificationState.PreparingClient,
			result: null,
			errorCode: null,
		})
	}

	const renderStatusMessage = () => {
		switch (status.state) {
			case VerificationState.PreparingClient:
				return null
			case VerificationState.WaitingForConnection:
				return (
					<View style={styles.statusContainer}>
						<ActivityIndicator size="large" color="#3B5AF5" />
						<Text style={styles.statusText}>Waiting for connection</Text>
						{connectUrl && (
							<TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(connectUrl)}>
								<Text style={styles.linkButtonText}>Open World App</Text>
							</TouchableOpacity>
						)}
					</View>
				)
			case VerificationState.WaitingForApp:
				return (
					<View style={styles.statusContainer}>
						<ActivityIndicator size="large" color="#3B5AF5" />
						<Text style={styles.statusText}>Waiting for confirmation</Text>
					</View>
				)
			case VerificationState.Confirmed:
				return (
					<View style={styles.statusContainer}>
						<Text style={styles.successText}>Verification successful!</Text>
						<Text style={styles.proofText}>Proof received. Check console for details.</Text>
						<TouchableOpacity style={styles.resetButton} onPress={handleReset}>
							<Text style={styles.resetButtonText}>Reset</Text>
						</TouchableOpacity>
					</View>
				)
			case VerificationState.Failed:
				return (
					<View style={styles.statusContainer}>
						<Text style={styles.errorText}>Verification failed</Text>
						<Text style={styles.errorDetail}>{status.errorCode || 'Unknown error occurred'}</Text>
						<TouchableOpacity style={styles.resetButton} onPress={handleReset}>
							<Text style={styles.resetButtonText}>Reset</Text>
						</TouchableOpacity>
					</View>
				)
		}
	}

	// Log proof to console when confirmed
	useEffect(() => {
		if (status.state === VerificationState.Confirmed) {
			console.log('Verification proof:', status.result)
		}
	}, [status])

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Worldcoin IDKit Demo</Text>

			{status.state === VerificationState.PreparingClient ? (
				<TouchableOpacity style={styles.button} onPress={handleVerify}>
					<Text style={styles.buttonText}>Verify with World ID</Text>
				</TouchableOpacity>
			) : (
				renderStatusMessage()
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#f8f9fa',
		borderRadius: 8,
		width: '90%',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	heading: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	button: {
		backgroundColor: '#3B5AF5',
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 50,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
	statusContainer: {
		alignItems: 'center',
		marginTop: 16,
	},
	statusText: {
		marginTop: 12,
		fontSize: 16,
		fontWeight: '500',
	},
	successText: {
		color: '#28a745',
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	proofText: {
		fontSize: 14,
		textAlign: 'center',
	},
	errorText: {
		color: '#dc3545',
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	errorDetail: {
		fontSize: 14,
		textAlign: 'center',
		color: '#dc3545',
	},
	linkButton: {
		marginTop: 16,
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#3B5AF5',
		borderRadius: 50,
	},
	linkButtonText: {
		color: '#3B5AF5',
		fontWeight: '500',
	},
	resetButton: {
		marginTop: 16,
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: '#6c757d',
		borderRadius: 50,
	},
	resetButtonText: {
		color: 'white',
		fontWeight: '500',
	},
})
