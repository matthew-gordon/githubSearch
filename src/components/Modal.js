import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFilters } from '../context/filter-context'
import { renderLanguageIcon } from '../utils'

const ModalTab = createBottomTabNavigator()

function FilterTab({ navigation }) {
  const languages = ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'Java']
  const { setLanguage } = useFilters()

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.languageLabel}>Language</Text>
      </View>
      <View style={styles.section}>
        {languages.map(language => (
          <TouchableOpacity
            key={language}
            style={styles.optionContainer}
            onPress={() => {
              setLanguage(language)
              navigation.navigate('Feed')
            }}
          >
            {language ? renderLanguageIcon({ size: 40, language: language.toLowerCase() }) : null}
            <Text>{language}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  )
}

export default function ModalScreen() {
  return (
    <ModalTab.Navigator>
      <ModalTab.Screen name="Language" component={FilterTab} />
    </ModalTab.Navigator>
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageLabel: {
    fontSize: 22,
    padding: 10,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  optionContainer: {
    width: '50%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
