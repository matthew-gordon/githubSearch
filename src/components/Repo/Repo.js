import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from '../common/Card'

export default function Repo({ repo }) {
  const { navigate } = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigate('Details', { repo })}
    >
      <Card
        style={styles.card}
      >
        <Text style={styles.repoName}>{repo.full_name}</Text>
        <View style={styles.repoMeta}>
          <Text>stars: {repo.stargazers_count}</Text>
          <Text>forks: {repo.forks_count}</Text>
          <Text>language: {repo.language}</Text>
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
    // width: '100%',
  },
})