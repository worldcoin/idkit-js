import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { 
  setupIDKitForReactNative, 
  hashToField, 
  generateKey, 
  exportKey,
  // Import both hook-based and direct store implementations
  useWorldBridgeStore,
  WorldBridgeStore,
  LocalVerificationState
} from 'takis-core-idkit-react-native'

// Initialize polyfills
setupIDKitForReactNative()

// Example component using hook-based store
function HookBasedExample() {
  // Use the hook-based store directly
  const bridgeStore = useWorldBridgeStore()
  
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Hook-based Store Example</Text>
      
      <Text>Current state: {LocalVerificationState[bridgeStore.verificationState]}</Text>
      
      <Button 
        title="Create Client" 
        onPress={() => bridgeStore.createClient({ app_id: 'test-app' })}
      />
      
      <Button 
        title="Poll Updates" 
        onPress={() => bridgeStore.pollForUpdates()}
      />
      
      <Button 
        title="Reset" 
        onPress={() => bridgeStore.reset()}
      />
      
      {bridgeStore.connectorURI && (
        <View style={styles.result}>
          <Text style={styles.label}>Connector URI:</Text>
          <Text style={styles.value}>{bridgeStore.connectorURI}</Text>
        </View>
      )}
      
      {bridgeStore.result && (
        <View style={styles.result}>
          <Text style={styles.label}>Verification Result:</Text>
          <Text style={styles.value}>
            {JSON.stringify(bridgeStore.result, null, 2)}
          </Text>
        </View>
      )}
    </View>
  )
}

// Example component using direct store access
// This is the recommended approach for Hermes JS engine in React Native
function DirectStoreExample() {
  // Use local state to trigger re-renders
  const [, forceUpdate] = useState<{}>({})
  
  // Subscribe to store changes when the component mounts
  useEffect(() => {
    // Set up a subscription to the store
    const unsubscribe = WorldBridgeStore.subscribe(() => {
      // Force a re-render when the store changes
      forceUpdate({})
    })
    
    // Clean up subscription on unmount
    return () => {
      unsubscribe()
    }
  }, [])
  
  // Get current state
  const state = WorldBridgeStore.getState()
  
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Direct Store Example (For Hermes)</Text>
      
      <Text>Current state: {LocalVerificationState[state.verificationState]}</Text>
      
      <Button 
        title="Create Client" 
        onPress={() => WorldBridgeStore.createClient({ app_id: 'test-app-direct' })}
      />
      
      <Button 
        title="Poll Updates" 
        onPress={() => WorldBridgeStore.pollForUpdates()}
      />
      
      <Button 
        title="Reset" 
        onPress={() => WorldBridgeStore.reset()}
      />
      
      {state.connectorURI && (
        <View style={styles.result}>
          <Text style={styles.label}>Connector URI:</Text>
          <Text style={styles.value}>{state.connectorURI}</Text>
        </View>
      )}
      
      {state.result && (
        <View style={styles.result}>
          <Text style={styles.label}>Verification Result:</Text>
          <Text style={styles.value}>
            {JSON.stringify(state.result, null, 2)}
          </Text>
        </View>
      )}
    </View>
  )
}

// Main example component showing crypto and store functionality
export default function IDKitExample() {
  const [hash, setHash] = useState<string | null>(null)
  const [keyInfo, setKeyInfo] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const performHashing = async () => {
    try {
      // Example of using hashToField
      const result = await hashToField('Hello, World ID!')
      setHash(result.digest)
    } catch (err: any) {
      setError(`Hashing error: ${err.message}`)
    }
  }

  const performCrypto = async () => {
    try {
      // Example of using crypto functions
      const { key, iv } = await generateKey()
      const exportedKey = await exportKey(key)
      setKeyInfo(`Key generated and exported successfully: ${exportedKey.substring(0, 10)}...`)
    } catch (err: any) {
      setError(`Crypto error: ${err.message}`)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>IDKit React Native Example</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Crypto Functions Test</Text>
          
          <Button title="Test Hashing" onPress={performHashing} />
          <Button title="Test Crypto" onPress={performCrypto} />
          
          {hash && (
            <View style={styles.result}>
              <Text style={styles.label}>Hash Result:</Text>
              <Text style={styles.value}>{hash}</Text>
            </View>
          )}
          
          {keyInfo && (
            <View style={styles.result}>
              <Text style={styles.label}>Crypto Result:</Text>
              <Text style={styles.value}>{keyInfo}</Text>
            </View>
          )}
          
          {error && (
            <View style={styles.error}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
        </View>
        
        {/* In real Hermes environments, you may need to comment out the hook-based example */}
        <HookBasedExample />
        
        {/* This version should work in all environments including Hermes */}
        <DirectStoreExample />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  result: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginTop: 5,
    flexWrap: 'wrap',
  },
  error: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#ffdddd',
    borderRadius: 5,
    width: '100%',
  },
  errorText: {
    color: 'red',
  },
})