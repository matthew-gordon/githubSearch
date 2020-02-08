import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { FilterProvider } from './filter-context'

export default function AppProviders({ children }) {
  return (
    <NavigationContainer>
      <FilterProvider>
        {children}
      </FilterProvider>
    </NavigationContainer>
  )
}