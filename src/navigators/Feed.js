import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FeedScreen from '../containers/Feed'
import DetailScreen from '../containers/Detail'

const Stack = createStackNavigator()

export default function FeedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ title: 'feed' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: 'detail' }}
      />
    </Stack.Navigator>
  )
} 