import React from 'react'
import { render } from '@testing-library/react-native'

import Loading from '../Loading'

describe('Input', () => {
  test('renders without crashing', async () => {
    const { baseElement } = render(<Loading />)

    expect(baseElement).toMatchSnapshot()
  })
})
