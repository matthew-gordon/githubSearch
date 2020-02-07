import { renderHook, act } from '@testing-library/react-hooks'
import useDebounce from '../useDebounce'

test('should create default value', () => {
  const { result } = renderHook(() => useDebounce('new values', 500))

  expect(result.current.debouncedValue).toBe('new values')
})