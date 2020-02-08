import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFilters } from '../context/filter-context'

const ModalTab = createBottomTabNavigator()

function LanguageTab({ navigation }) {
  const languages = ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'Java']
  const { setLanguage } = useFilters()

  return (
    <View style={styles.languageFilters}>
      <Text style={{ fontSize: 30 }}>Language</Text>
      {languages.map(language => (
        <Button key={language} title={language} onPress={() => {
          setLanguage(language)
          navigation.navigate('Main')
        }} />
      ))}
    </View>
  );
}

function SortTab({ navigation }) {
  const options = ['stars', 'score']
  const { setSort } = useFilters()

  return (
    <View style={styles.sortFilters}>
      <Text style={{ fontSize: 30 }}>Sort</Text>
      {options.map(sort => (
        <Button key={sort} title={sort} onPress={() => {
          setSort(sort)
          navigation.navigate('Main')
        }} />
      ))}
    </View>
  );
}

export default function ModalScreen() {
  return (
    <ModalTab.Navigator>
      <ModalTab.Screen name='Language' component={LanguageTab} />
      <ModalTab.Screen name='Sort' component={SortTab} />
    </ModalTab.Navigator>
  )
}

const styles = StyleSheet.create({
  languageFilters: {
    flex: 1,
    alignItems: 'flex-start'
  },
  sortFilters: {
    flex: 1,
    alignItems: 'flex-start'
  },
})