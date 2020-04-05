import React, { useRef, useEffect } from 'react'
import Analytics from 'appcenter-analytics'
import { NavigationContainer } from '@react-navigation/native'
import { FilterProvider } from './filter-context'

// Gets the current screen from navigation state
const getActiveRouteName = (state) => {
  const route = state.routes[state.index]

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state)
  }

  return route.name
}

export default function AppProviders({ children }) {
  const routeNameRef = useRef()
  const navigationRef = useRef()

  useEffect(() => {
    const state = navigationRef.current.getRootState()

    routeNameRef.current = getActiveRouteName(state)
  }, [])

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state) => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = getActiveRouteName(state)

        if (previousRouteName !== currentRouteName) {
          Analytics.trackEvent('Screen Hit', { screen: currentRouteName })
        }
      }}
    >
      <FilterProvider>{children}</FilterProvider>
    </NavigationContainer>
  )
}
