import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { renderLanguageIcon } from '../../utils'
import { StarIcon } from '../common/Icons/StarIcon'
import { ForkIcon } from '../common/Icons/ForkIcon'
import Card from '../common/Card'

export default function Repo({ repo }) {
  const { navigate } = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigate('Details', { repo })}>
      <Card style={styles.card}>
        <Text style={styles.repoName}>{repo.full_name}</Text>
        <View style={styles.repoMeta}>
          <View style={styles.iconContainer}>
            <StarIcon size={20} style={styles.icon} />
            <Text>{repo.stargazers_count}</Text>
          </View>
          <View style={styles.iconContainer}>
            <ForkIcon size={20} style={styles.icon} />
            <Text>{repo.forks_count}</Text>
          </View>
          <View style={styles.iconContainer}>
            {repo.language
              ? renderLanguageIcon({ size: 25, language: repo.language.toLowerCase() })
              : null}
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
    alignItems: 'flex-end',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    margin: 10,
  },
})
