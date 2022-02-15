import Trending from '../components/Trending';
import List from '../components/List';
import Categories from '../components/Categories';

const Movies = () => {
  return (
    <>
      <Trending queryType="movie" />
      <Categories query="movie" />
      <List queryType="movie" query="popular" all={true} />
      <List queryType="movie" query="top_rated" all={true} />
    </>
  )
}

export default Movies