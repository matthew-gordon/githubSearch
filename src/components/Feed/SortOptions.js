import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useFilters } from '../../context/filter-context'

export default function SortOptions() {
  const { sort, setSort } = useFilters()

  const activeSort = {
    backgroundColor: 'cornflowerblue',
    color: '#fff',
  }

  return (
    <>
      <TouchableOpacity
        style={[styles.sort, sort === 'stars' ? activeSort : null]}
        onPress={() => setSort('stars')}
      >
        <Text style={[styles.sortLabel, sort === 'stars' ? { color: '#fff' } : null]}>stars</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.sort, sort === 'score' ? activeSort : null]}
        onPress={() => setSort('score')}
      >
        <Text style={[styles.sortLabel, sort === 'score' ? { color: '#fff' } : null]}>score</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  sort: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  sortLabel: {
    padding: 10,
  },
})
