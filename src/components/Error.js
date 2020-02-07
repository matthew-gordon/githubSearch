import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Error({ error }) {
  const { navigate } = useNavigation()

  return (
    <View style={[styles.loadingContainer, props.style]}>
      <Text>Oh no! Something went wrong.</Text>
      <Button title="return home" onPress={() => navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
