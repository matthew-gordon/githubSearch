import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RubyIcon(props) {
  const { active, muted, themeColors } = props
  const activeColor = 'gold'
  const inactiveColor = '#000'

  return (
    <Icon name="language-ruby-on-rails" color={active ? activeColor : inactiveColor} {...props} />
  )
}
