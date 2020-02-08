import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Error({ error }) {
  return (
    <View testId="error" style={styles.errorContainer}>
      <Text>Oh no! Something went wrong.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
