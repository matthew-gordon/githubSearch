import React from 'react'
import { FlatList, Text } from 'react-native'
import Repo from '../Repo/Repo'

export default function Feed({ repos }) {
  return (
    <>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.node_id}
        data={repos}
        renderItem={({ item, index }) => (
          <Repo repo={item} />
        )}
        ListEmptyComponent={<Text>No repos</Text>}
      />
    </>
  )
}