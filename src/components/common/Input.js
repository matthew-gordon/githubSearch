import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput as RNTextInput } from 'react-native'

export default function TextInput({ ...props }) {
  return (
    <RNTextInput
      {...props}
      style={[styles.input]}
      placeholder={props.name}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 42,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
})