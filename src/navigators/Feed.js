import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

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
          headerRight: props => (
            <TouchableOpacity onPress={() => navigate('FilterModal')}>
              <View style={styles.headerFilter}>
                <Icon size={25} name="ios-list" {...props} />
              </View>
            </TouchableOpacity>
          ),
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

const styles = StyleSheet.create({
  headerFilter: {
    padding: 10,
  },
})
