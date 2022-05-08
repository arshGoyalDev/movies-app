import { useEffect, useState } from 'react'

import { useFetch } from '../../hooks'

const SearchResults = ({ searchValue, query }) => {
  const data = useFetch(``, "results");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data])

  return (
    <div>
      SearchResults
    </div>
  )
}

export default SearchResults