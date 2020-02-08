import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import FeedScreen from '../containers/Feed'
import DetailScreen from '../containers/Detail'

const Stack = createStackNavigator()

export default function FeedNavigator() {
  const { navigate } = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: 'feed',
          headerRight: (props) => <Text onPress={() => navigate('Details')}>filters</Text>
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.repo.name,
        })}
      />
    </Stack.Navigator>
  )
}
