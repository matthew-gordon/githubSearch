import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function JavaScriptIcon(props) {
  const { active, muted, themeColors } = props
  const activeColor = 'gold'
  const inactiveColor = '#000'

  return <Icon name="language-javascript" color={active ? activeColor : inactiveColor} {...props} />
}