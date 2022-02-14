import Trending from '../components/Trending';

import List from '../components/List';

const Movies = () => {
  return (
    <>
      <Trending category="movie" />
      <List queryType="movie" query="popular" />
      <List queryType="movie" query="top_rated" />
    </>
  )
}

export default Movies