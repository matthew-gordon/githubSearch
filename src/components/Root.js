import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedIcon from './common/Tabicons/Feed'

import FeedNavigator from '../navigators/Feed'

const Tab = createBottomTabNavigator()

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarIcon: props => <FeedIcon {...props} />
        }}
      />
    </Tab.Navigator>
  )
}

export default Root
