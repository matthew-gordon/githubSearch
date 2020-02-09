import { useState, useEffect } from 'react'

export function buildUrl({ baseUrl, resource, searchQuery, languages, sort, order }) {
  let selectedLanguages = ''
  let query = ''

  if (!searchQuery) {
    query = 'github'
  } else {
    query = searchQuery
  }

  if (languages.length > 1) {
    selectedLanguages = languages
      .reduce((prev, curr) => {
        return [...prev, `language:${curr}`]
      }, '')
      .join('+')
  } else {
    selectedLanguages = `language:${languages[0]}`
  }

  return `${baseUrl}/${resource}?q=${query}+${selectedLanguages}&sort=${sort}&order=${order}`
}

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
    const url = buildUrl({
      baseUrl,
      resource,
      searchQuery,
      languages,
      sort,
      order,
    })

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
