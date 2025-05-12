import React from 'react'
import { IDKitDemo } from '../components/IDKitDemo'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Worldcoin IDKit Example</Text>
			<Text style={styles.text}>Simple Expo example for Worldcoin IDKit integration</Text>
			<View style={styles.demoContainer}>
				<IDKitDemo />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	text: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 40,
	},
	demoContainer: {
		width: '100%',
		alignItems: 'center',
	},
})
