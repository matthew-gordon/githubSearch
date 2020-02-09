import { useState, useEffect } from 'react'
import { buildUrl } from '../utils'

export default function useGithubSearch({
  resource,
  searchQuery,
  languages,
  sort,
  order,
  options = {},
}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const baseUrl = 'https://api.github.com/search'

  async function fetchData() {
    const url = buildUrl({ baseUrl, resource, searchQuery, languages, sort, order })

    try {
      setLoading(true)
      const res = await fetch(url, options)
      const json = await res.json()
      setData(json)
      setLoading(false)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    ;(async () => {
      await fetchData()
    })()
  }, [searchQuery, languages, sort, order])

  return { fetchData, data, loading, error }
}
