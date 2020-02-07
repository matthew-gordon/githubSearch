import { useState, useEffect } from 'react'

export default function useGithubSearch({ searchQuery, language, sort, order, options = {} }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const baseUrl = 'https://api.github.com/search/repositories'
  const url = `${baseUrl}?q=${searchQuery}+language:${language}&sort=${sort}&order=${order}`

  useEffect(() => {
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
    fetchData()
  }, [searchQuery])

  return { data, loading, error }
}