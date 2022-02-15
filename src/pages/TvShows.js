import Trending from '../components/Trending';
import List from '../components/List';
import Categories from '../components/Categories';

const TvShows = () => {
  return (
    <>
      <Trending queryType="tv" />
      <Categories query="tv" />
      <List queryType="tv" query="popular" all={true} />
      <List queryType="tv" query="top_rated" all={true} />
    </>
  )
}

export default TvShows