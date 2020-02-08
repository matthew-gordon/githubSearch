import React from 'react'
import { render } from '@testing-library/react-native'

import Error from '../Error'

describe('Error', () => {
  test('renders without crashing', async () => {
    const { baseElement } = render(<Error />)

    expect(baseElement).toMatchSnapshot()
  })
})