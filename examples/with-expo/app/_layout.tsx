import { Stack } from 'expo-router'
import * as Linking from 'expo-linking'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'

// Import quick crypto to polyfill
import '../app/polyfills'

export default function RootLayout() {
	const colorScheme = useColorScheme()

	useEffect(() => {
		const handleDeepLink = (event: Linking.EventType) => {
			console.log('event', event)
			const { path } = Linking.parse(event.url)
			if (path === '') {
				// Do nothing, just acknowledge it
				console.log('Received home deep link')
			}
		}

		// For cold starts
		Linking.getInitialURL().then(url => {
			if (url) {
				handleDeepLink({ url } as Linking.EventType)
			}
		})

		// For in-app events
		const sub = Linking.addEventListener('url', handleDeepLink)
		return () => sub.remove()
	}, [])

	return (
		<>
			<StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
			<Stack screenOptions={{ headerShown: false }} />
		</>
	)
}
