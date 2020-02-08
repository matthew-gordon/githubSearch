import { renderHook, act } from '@testing-library/react-hooks'
import useGithubSearch from '../useGithubSearch'

const mockFetch = jest.fn().mockImplementation(() => Promise.resolve())

global.fetch = mockFetch

afterEach(() => {
  global.fetch.mockRestore()
})

test('returns list of repositories', async () => {
  mockFetch.mockReturnValueOnce({
    ok: true,
    json: () => [{ id: 'test-id' }]
  })

  const { result, waitForNextUpdate } = renderHook(
    () => useGithubSearch({
      searchQuery: 'tetris',
      language: 'javascript',
      sort: 'stars',
      order: 'desc',
    })
  )

  act(() => {
    result.current.fetchData()
  })

  await waitForNextUpdate()

  // expect(result.current.loading).toBeTruthy()
  expect(result.current.loading).toBeFalsy()
  expect(result.current.data).toStrictEqual([{ id: 'test-id' }])
})
