import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import FeedNavigator from '../navigators/Feed'
import ModalScreen from '../components/Modal'
import { HomeIcon } from '../components/common/Icons/HomeIcon'

const RootStack = createStackNavigator()
const MainTab = createBottomTabNavigator()

function MainTabScreen() {
  return (
    <MainTab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <MainTab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          tabBarIcon: props => <HomeIcon size={30} style={styles.icon} />,
        }}
      />
    </MainTab.Navigator>
  )
}

function RootStackScreen() {
  return (
    <RootStack.Navigator transparentCard mode="modal">
      <RootStack.Screen name="Main" component={MainTabScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="FilterModal" component={ModalScreen} options={{ title: 'Filters' }} />
    </RootStack.Navigator>
  )
}

export default RootStackScreen

const styles = StyleSheet.create({
  icon: {
    height: 50,
    padding: 10,
    margin: 10,
  },
})
