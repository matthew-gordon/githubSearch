import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useFilters } from '../context/filter-context'
import useDebounce from '../hooks/useDebounce'
import useGithubSearch from '../hooks/useGithubSearch'
import Loading from '../components/Loading'
import Error from '../components/Error'
import TextInput from '../components/common/Input'
import Repo from '../components/Repo/Repo'

export default function FeedScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const { language, sort, order } = useFilters()
  const { debouncedValue } = useDebounce(searchQuery, 500)

  const { data, loading, error } = useGithubSearch({
    resource: 'repositories',
    searchQuery: debouncedValue,
    language,
    sort,
    order,
  })

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
          </View>
        </View>
        <View style={styles.feedBody}>
          {loading ? (
            <Loading size={'large'} />
          ) : (
              <FlatList
                style={styles.list}
                keyExtractor={(item) => item.node_id}
                data={data.items}
                renderItem={({ item, index }) => (
                  <Repo repo={item} />
                )}
                ListEmptyComponent={<Text>No repos</Text>}
              />
            )}
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
    backgroundColor: '#fff',
  },
  feedHeader: {
    backgroundColor: '#fff',
  },
  searchInput: {
    margin: 10,
  },
  feedBody: {
    flex: 1,
  },
})