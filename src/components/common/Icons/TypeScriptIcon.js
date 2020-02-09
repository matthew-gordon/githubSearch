import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function TypeScriptIcon(props) {
  const { active, muted, themeColors } = props
  const activeColor = 'gold'
  const inactiveColor = '#000'

  return <Icon name="language-typescript" color={active ? activeColor : inactiveColor} {...props} />
}
