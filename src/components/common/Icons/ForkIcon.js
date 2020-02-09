import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export function ForkIcon(props) {
  const { active, muted, themeColors } = props
  const activeColor = 'gold'
  const inactiveColor = '#000'

  return <Icon name="ios-git-network" color={active ? activeColor : inactiveColor} {...props} />
}