import List from '../components/List';
import Trending from '../components/Trending';

const Home = () => {
  return (
    <>
      <Trending category="all" />
      <List queryType="movie" query="popular" />
      <List queryType="tv" query="popular" />
      <List queryType="movie" query="top_rated" />
      <List queryType="tv" query="top_rated" />
    </>
  )
}

export default Home