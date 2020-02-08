import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FeedNavigator from '../navigators/Feed'

const Tab = createBottomTabNavigator()

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
      />
    </Tab.Navigator>
  )
}

export default Root
