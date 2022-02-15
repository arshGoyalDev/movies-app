import Trending from '../components/Trending';
import List from '../components/List';
import Categories from '../components/Categories';

const TvShows = () => {
  return (
    <>
      <Trending queryType="tv" />
      <Categories query="tv" />
      <List queryType="tv" query="on_the_air" all={true} />
      <List heading={false} queryType="tv" query="on_the_air" all={true} page={2} />
      <List queryType="tv" query="popular" all={true} />
      <List heading={false} queryType="tv" query="popular" all={true} page={2} />
      <List queryType="tv" query="top_rated" all={true} />
      <List heading={false} queryType="tv" query="top_rated" all={true} page={2} />
    </>
  )
}

export default TvShows