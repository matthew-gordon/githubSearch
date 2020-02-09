import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { JavaScriptIcon } from '../common/Icons/JavaScriptIcon'
import { JavaIcon } from '../common/Icons/JavaIcon'
import { RubyIcon } from '../common/Icons/RubyIcon'
import { PythonIcon } from '../common/Icons/PythonIcon'
import { TypeScriptIcon } from '../common/Icons/TypeScriptIcon'
import { ForkIcon } from '../common/Icons/ForkIcon'
import { StarIcon } from '../common/Icons/StarIcon'

import Card from '../common/Card'

export default function Repo({ repo }) {
  const { navigate } = useNavigation()

  function renderLanguageIcon({ language }) {
    switch(language) {
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

  return (
    <TouchableOpacity
      onPress={() => navigate('Details', { repo })}
    >
      <Card
        style={styles.card}
      >
        <Text style={styles.repoName}>{repo.full_name}</Text>
        <View style={styles.repoMeta}>
          <View style={styles.iconContainer}>
            <Text>{repo.stargazers_count}</Text>
           
            <StarIcon size={20} style={styles.icon} />
          </View>
          <View style={styles.iconContainer}>
            <Text> {repo.forks_count}</Text>
            <ForkIcon size={20} style={styles.icon} />
          </View>
          <View style={styles.iconContainer}>
            {renderLanguageIcon({ language: repo.language.toLowerCase() })}
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
  },
  repoName: {
    fontSize: 22,
    marginVertical: 5,
  },
  repoMeta: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  iconContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    margin: 10,
  },
})