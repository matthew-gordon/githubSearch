import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FilterTab from '../components/Feed/FilterTab'

const ModalTab = createBottomTabNavigator()

export default function ModalScreen() {
  return (
    <ModalTab.Navigator>
      <ModalTab.Screen name="Language" component={FilterTab} />
    </ModalTab.Navigator>
  )
}
