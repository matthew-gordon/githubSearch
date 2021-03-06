import React from 'react'
import { StyleSheet, TextInput as RNTextInput } from 'react-native'

export default function TextInput({ ...props }) {
  return <RNTextInput {...props} style={[styles.input]} />
}

const styles = StyleSheet.create({
  input: {
    height: 42,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
})
