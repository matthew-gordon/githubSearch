import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export function StarIcon(props) {
  const { active, muted, themeColors } = props
  const activeColor = 'gold'
  const inactiveColor = '#000'

  return <Icon name="ios-star" color={active ? activeColor : inactiveColor} {...props} />
}
