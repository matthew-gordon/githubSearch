import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { FilterProvider } from './context/filter-context'
import Root from './components/Root'

export default function App() {
  return (
    <NavigationContainer>
      <FilterProvider>
        <Root />
      </FilterProvider>
    </NavigationContainer>
  )
}
