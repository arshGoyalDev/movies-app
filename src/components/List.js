import { getByTitle } from '@testing-library/react';
import { useEffect, useState } from 'react'
import { useFetch } from '../hooks'

const List = ({type, query, pages}) => {
  const data = useFetch(`${type}/${query}?language=en-US&`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      console.log(data);
      setLoading(false);
    }
  }, [data])


  const getTitle = () => {
    if (type === "person") {
      return "people"
    } else if (type === "movie") {
      return "movies"
    } else if (type === "tv") {
      return "tv shows"
    }
  }

  return (
    <div className='scrollbar flex gap-4 overflow-x-auto'>
      <h3>
        {query.replaceAll("_", " ")}{" "}
        {getTitle()}
      </h3>
      {loading ? (
        ""
      ) : (
        <>
        {type === "person"}
        </>
      )}
    </div>
  )
}

export default List