import { render } from '@testing-library/react-native'
import { renderLanguageIcon, buildUrl } from '../utils'

describe('utils', () => {
  describe('renerLanguageIcon', () => {
    it('renders an icon with correct properties', () => {
      const { baseElement } = render(renderLanguageIcon({ size: 25, language: 'javascript' }))

      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('buildUrl', () => {
    it('builds correct url for single language', () => {
      const url = buildUrl({
        baseUrl: 'https://api.github.com/search',
        resource: 'repositories',
        searchQuery: 'tetris',
        languages: ['javascript'],
        sort: 'stars',
        order: 'desc',
      })

      expect(url).toBe(
        'https://api.github.com/search/repositories?q=tetris+language:javascript&sort=stars&order=desc'
      )
    })
  })
})
