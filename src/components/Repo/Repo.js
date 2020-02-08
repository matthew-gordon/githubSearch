import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Repo({ repo }) {
  return (
    <View
      style={styles.card}
    >
      <Text>{repo.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
})