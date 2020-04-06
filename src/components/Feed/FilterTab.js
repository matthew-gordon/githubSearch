import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useFilters } from '../../context/filter-context'
import { renderLanguageIcon } from '../../utils'

export default function FilterTab({ navigation }) {
  const languagesOptions = ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'Java']
  const { languages, setLanguages } = useFilters()

  function filterActive(selectedFilters, option) {
    return selectedFilters.indexOf(option.toLowerCase()) > -1
  }

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.languageLabel}>language!!</Text>
      </View>
      <View style={styles.section}>
        {languagesOptions.map((language) => (
          <TouchableOpacity
            key={language}
            style={[
              styles.optionContainer,
              filterActive(languages, language) ? { backgroundColor: 'rgba(0, 0, 0, 0.3)' } : null,
            ]}
            onPress={() => {
              if (filterActive(languages, language)) {
                const data = languages.filter((lang) => lang !== language.toLowerCase())

                setLanguages(data)
              } else {
                const data = [...languages, language.toLowerCase()]

                setLanguages(data)
              }
              navigation.navigate('Feed')
            }}
          >
            {renderLanguageIcon({ size: 40, language: language.toLowerCase() })}
            <Text>{language}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageLabel: {
    fontSize: 10,
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
