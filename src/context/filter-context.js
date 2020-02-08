import React, { useState, createContext, useContext } from 'react'

const FilterContext = createContext()

function FilterProvider({ children }) {
  const [language, setLanguage] = useState('javascript')
  const [sort, setSort] = useState('stars')
  const [order, setOrder] = useState('desc')

  return (
    <FilterContext.Provider
      value={{
        setLanguage,
        language,
        setSort,
        sort,
        setOrder,
        order
      }}
    >
      {children}
    </FilterContext.Provider>
  )

}

function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error(`useFilters must be used within a FilterProvider`)
  }
  return context
}

export { FilterProvider, useFilters }