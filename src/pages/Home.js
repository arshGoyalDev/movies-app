import Trending from '../components/Trending';
import List from '../components/List';

const Home = () => {
  return (
    <>
      <Trending category="all" />
      <List queryType="movie" query="popular" all={false} />
      <List queryType="tv" query="popular" all={false} />
      <List queryType="movie" query="top_rated" all={false} />
      <List queryType="tv" query="top_rated" all={false} />
    </>
  )
}

export default Home