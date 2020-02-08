import 'react-native-gesture-handler'
import React from 'react'
import AppProviders from './context'
import Root from './components/Root'

export default function App() {
  return (
    <AppProviders>
      <Root />
    </AppProviders>
  )
}
