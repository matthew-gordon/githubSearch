import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default function Loading({ size, ...props }) {

  return (
    <View style={[styles.loadingContainer, props.style]}>
      <ActivityIndicator size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
