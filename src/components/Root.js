import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import FeedNavigator from '../navigators/Feed'
import ModalScreen from '../components/Modal'

const RootStack = createStackNavigator()
const MainTab = createBottomTabNavigator()

function MainTabScreen() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Home"
        component={FeedNavigator}
      />
    </MainTab.Navigator>
  )
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainTabScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='FilterModal'
        component={ModalScreen}
        options={{ title: 'Filters' }}
      />
    </RootStack.Navigator>
  )
}

export default RootStackScreen
