import { useState, useEffect } from 'react'

export default function useGithubSearch({ resource, searchQuery, language, sort, order, options = {} }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const baseUrl = `https://api.github.com/search/${resource}`
  const url = `${baseUrl}?q=${searchQuery}+language:${language}&sort=${sort}&order=${order}`

  async function fetchData() {
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
    (async () => {
      await fetchData()
    })()
  }, [searchQuery, language, sort, order])

  return { fetchData, data, loading, error }
}
