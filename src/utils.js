import React from 'react'
import { StyleSheet } from 'react-native'
import { JavaScriptIcon } from './components/common/Icons/JavaScriptIcon'
import { JavaIcon } from './components/common/Icons/JavaIcon'
import { RubyIcon } from './components/common/Icons/RubyIcon'
import { PythonIcon } from './components/common/Icons/PythonIcon'
import { TypeScriptIcon } from './components/common/Icons/TypeScriptIcon'

export function buildUrl({ baseUrl, resource, searchQuery, languages, sort, order }) {
  let selectedLanguages = ''
  let query = ''

  if (!searchQuery) {
    query = 'github'
  } else {
    query = searchQuery
  }

  if (languages.length > 1) {
    selectedLanguages = languages
      .reduce((prev, curr) => {
        return [...prev, `language:${curr}`]
      }, '')
      .join('+')
  } else {
    selectedLanguages = `language:${languages[0]}`
  }

  return `${baseUrl}/${resource}?q=${query}+${selectedLanguages}&sort=${sort}&order=${order}`
}

export function renderLanguageIcon({ size, language }) {
  switch (language) {
    case 'javascript':
      return <JavaScriptIcon size={size} style={styles.icon} />
    case 'python':
      return <PythonIcon size={size} style={styles.icon} />
    case 'java':
      return <JavaIcon size={size} style={styles.icon} />
    case 'ruby':
      return <RubyIcon size={size} style={styles.icon} />
    case 'typescript':
      return <TypeScriptIcon size={size} style={styles.icon} />
  }
}

const styles = StyleSheet.create({
  icon: {
    margin: 10,
  },
})
