import React from 'react'
import { StyleSheet, View, Text, Image, Button, ScrollView, Linking } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { StarIcon } from '../components/common/Icons/StarIcon'
import { ForkIcon } from '../components/common/Icons/ForkIcon'
import { LinkIcon } from '../components/common/Icons/LinkIcon'
import { renderLanguageIcon } from '../utils'

export default function DetailScreen() {
  const { params } = useRoute()

  return (
    <ScrollView contentContainerStyle={styles.sectionContainer}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: params.repo.owner.avatar_url }} />
      </View>
      <Text style={styles.repoOwner}>{params.repo.owner.login}</Text>
      <View style={styles.repoLink}>
        <LinkIcon size={25} />
        <Text onPress={() => Linking.openURL(params.repo.html_url)} style={styles.repoLink}>
          {params.repo.full_name}
        </Text>
      </View>
      <View style={styles.metaBar}>
        <View style={styles.iconContainer}>
          <StarIcon size={45} style={styles.icon} />
          <Text>{params.repo.stargazers_count}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.iconContainer}>
          <ForkIcon size={45} style={styles.icon} />
          <Text>{params.repo.forks_count}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.iconContainer}>
          {renderLanguageIcon({ size: 45, language: params.repo.language.toLowerCase() })}
          <Text>language</Text>
        </View>
      </View>
      <View style={styles.repoMeta}>
        <Text style={styles.repoDescription}>{params.repo.description}</Text>
      </View>
    </ScrollView>
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
    height: 200,
  },
  repoMeta: {
    flex: 1,
  },
  repoOwner: {
    fontSize: 40,
  },
  metaBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  repoName: {
    fontSize: 22,
    margin: 10,
  },
  repoLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  repoFullName: {
    margin: 10,
    padding: 5,
    color: '#fff',
    fontSize: 15,
    backgroundColor: 'transparent',
  },
  repoDescription: {
    fontSize: 15,
    margin: 10,
  },
  repoStats: {
    margin: 10,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  icon: {
    margin: 10,
  },
  divider: {
    height: 50,
    width: 2,
    backgroundColor: '#000',
  },
})
