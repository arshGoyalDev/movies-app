import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../components/Categories'

const Category = () => {
  const params = useParams();

  return (
    <>
      <Categories query={params.query === 'movie' ? 'movie' : 'tv'} />
    </>
  )
}

export default Category