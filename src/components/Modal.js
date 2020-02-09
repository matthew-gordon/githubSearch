import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFilters } from '../context/filter-context'
import { renderLanguageIcon } from '../utils'

const ModalTab = createBottomTabNavigator()


function LanguageTab({ navigation }) {
  const languages = ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'Java']
  const { setLanguage } = useFilters()

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.languageLabel}>Language</Text>
      </View>
      <View style={styles.languageFilters}>
        {languages.map(language => (
          <>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => {
                setLanguage(language)
                navigation.navigate('Feed')
              }}
            >
              {renderLanguageIcon({ language: language.toLowerCase() })}
              <Text>{language}</Text>
            </TouchableOpacity>
          </>
        ))}
      </View>
    </>
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
  sectionHeader: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  languageLabel: {
    fontSize: 22,
    padding: 10,
  },
  languageFilters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  sortFilters: {
    flex: 1,
    alignItems: 'flex-start'
  },
  optionContainer: {
    width: '50%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
})