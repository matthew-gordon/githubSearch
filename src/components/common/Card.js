import * as React from 'react'
import { View, StyleSheet } from 'react-native'


export default function Card({ children }) {
  return (
    <View style={styles.root}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
})