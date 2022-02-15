import Trending from '../components/Trending';
import List from '../components/List';
import Categories from '../components/Categories';

const Movies = () => {
  return (
    <>
      <Trending queryType="movie" />
      <Categories query="movie" />
      <List queryType="movie" query="upcoming" all={true} />
      <List heading={false} queryType="movie" query="upcoming" all={true} page={2} />
      <List queryType="movie" query="popular" all={true} />
      <List heading={false} queryType="movie" query="popular" all={true} page={2} />
      <List queryType="movie" query="top_rated" all={true} />
      <List heading={false} queryType="movie" query="top_rated" all={true} page={2} />
    </>
  )
}

export default Movies