import React from 'react'
import { render } from '@testing-library/react-native'

import TextInput from '../common/Input'

describe('Input', () => {
  test('renders without crashing', async () => {
    const { baseElement } = render(<TextInput />)

    expect(baseElement).toMatchSnapshot()
  })
})
