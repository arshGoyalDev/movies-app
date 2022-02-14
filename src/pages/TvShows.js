import Trending from '../components/Trending';

import List from '../components/List';

const TvShows = () => {
  return (
    <>
      <Trending category="tv" />
      <List queryType="tv" query="popular" />
      <List queryType="tv" query="top_rated" />
    </>
  )
}

export default TvShows