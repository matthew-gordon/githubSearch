import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function DetailScreen() {
  const { params } = useRoute()

  return (
    <View style={styles.sectionContainer}>
      <View styles={styles.repoStats}>
        <Text>repo stats</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: params.repo.owner.avatar_url }} />
      </View>
      <View style={styles.repoMeta}>
        <Text style={styles.repoDescription}>{params.repo.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    margin: 5,
  },
  avatarContainer: {
    padding: 10,
  },
  avatar: {
    borderRadius: 100,
    width: 200,
    height: 200
  },
  repoMeta: {
    flex: 1,
  },
  repoName: {
    fontSize: 22,
    margin: 10,
  },
  repoDescription: {
    flex: 1,
    margin: 10,
  },
  repoStats: {
    margin: 10,
  },
})