import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function DetailScreen() {
  return (
    <View style={styles.sectionContainer}>
      <Text>Detail Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})