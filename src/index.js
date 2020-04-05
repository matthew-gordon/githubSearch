import 'react-native-gesture-handler'
import React from 'react'
import codePush from 'react-native-code-push'
import AppProviders from './context'
import Root from './components/Root'

function App() {
  return (
    <AppProviders>
      <Root />
    </AppProviders>
  )
}

export default codePush(App)
