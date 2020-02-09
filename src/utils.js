import React from 'react'
import { StyleSheet } from 'react-native'
import { JavaScriptIcon } from './components/common/Icons/JavaScriptIcon'
import { JavaIcon } from './components/common/Icons/JavaIcon'
import { RubyIcon } from './components/common/Icons/RubyIcon'
import { PythonIcon } from './components/common/Icons/PythonIcon'
import { TypeScriptIcon } from './components/common/Icons/TypeScriptIcon'

export function renderLanguageIcon({ language }) {
  switch (language) {
    case 'javascript':
      return (
        <JavaScriptIcon size={25} style={styles.icon} />
      )
    case 'python':
      return (
        <PythonIcon size={25} style={styles.icon} />
      )
    case 'java':
      return (
        <JavaIcon size={25} style={styles.icon} />
      )
    case 'ruby':
      return (
        <RubyIcon size={25} style={styles.icon} />
      )
    case 'typescript':
      return (
        <TypeScriptIcon size={25} style={styles.icon} />
      )
  }
}

const styles = StyleSheet.create({
  icon: {
    margin: 5,
  },
})