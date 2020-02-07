import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import TextInput from '../components/common/Input'

import useDebounce from '../hooks/useDebounce'
import useGithubSearch from '../hooks/useGithub'

export default function FeedScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [sort, setSort] = useState('stars')
  const [order, setOrder] = useState('desc')

  const debouncedSearchTerm = useDebounce(searchQuery, 500)

  const { data, error, loading } = useGithubSearch({
    searchQuery: debouncedSearchTerm,
    language,
    sort,
    order,
  })

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.sectionContainer}>
        <Text>Error :( {`${error}`}</Text>
      </View>
    )
  }

  return (
    <View style={styles.sectionContainer}>
      <View>
        <Text>Feed Screen</Text>
        <TextInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onChangeText={(value) => setSearchQuery(value)}
        />
      </View>
      {!data || (!!data && data.items.length === 0) ? (
        <Text>No items matching your search</Text>
      ) : (
          <>
            {!!data && data.items.map((repo) => (
              <Text key={repo.id}>{repo.name}</Text>
            ))}
          </>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})