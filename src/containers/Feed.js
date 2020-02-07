import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import useDebounce from '../hooks/useDebounce'
import useGithubSearch from '../hooks/useGithubSearch'

import Loading from '../components/Loading'
import Error from '../components/Error'
import TextInput from '../components/common/Input'

export default function FeedScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [sort] = useState('stars')
  const [order, setOrder] = useState('desc')

  const debouncedSearchTerm = useDebounce(searchQuery, 500)

  const { data, loading, error } = useGithubSearch({
    searchQuery: debouncedSearchTerm,
    language,
    sort,
    order,
  })

  if (loading) {
    return <Loading size={'large'} />
  }

  if (error) {
    return <Error error={error} />
  }

  if (data) {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.feedHeader}>
          <View style={styles.searchInput}>
            <TextInput
              value={searchQuery}
              onChangeText={(value) => setSearchQuery(value)}
            />
            <Text>search term: "{`${searchQuery}`}"</Text>
          </View>
        </View>
        <View style={styles.feedBody}>
          {!data || (!!data.items && data.items.length === 0)
            ? (
              <Text>No items matching your search</Text>
            ) : (!!data && data.items.map((repo) => (
              <Card key={repo.id} repo={repo} />
            )))}
        </View>
      </View>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 10,
  },
  feedHeader: {},
  searchInput: {
    margin: 10,
  },
  feedBody: {
    padding: 10,
  },
})