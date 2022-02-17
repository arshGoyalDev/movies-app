import Trending from "../components/Trending";
import List from "../components/List";

import {Link} from 'react-router-dom';

const Home = () => {
  const genreData = [
    {
      value: "Animation",
      img: "https://images.unsplash.com/photo-1635280370067-59d389602df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: {
        movie: "16",
        tv: "16",
      },
    },
    {
      value: "Sci - Fi",
      img: "https://images.unsplash.com/photo-1634658340808-9abaef7eb9a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      id: {
        movie: "878",
        tv: "10765",
      },
    },
    {
      value: "Action",
      img: "https://images.unsplash.com/photo-1508633069371-a735f885a1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      id: {
        movie: "28",
        tv: "10759",
      },
    },
    {
      value: "Mystery",
      img: "https://images.unsplash.com/photo-1601824772624-9375c6f20701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      id: {
        movie: "9648",
        tv: "9648",
      },
    },
    {
      value: "War",
      img: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80",
      id: {
        movie: "10752",
        tv: "10768",
      },
    },
  ];

  return (
    <>
      <Trending queryType="all" />
      <div className="home--genres">
        <div>
          {genreData.map((genre) => (
            <div key={genre.value} className="home--genres--genre">
              <div className="home--genres--genre--backdrop">
                <img src={genre.img} alt={genre.value} />
              </div>
              <h3>{genre.value}</h3>
              <div className="home--genres--genre--options">
                <Link to={`genre/movie/${genre.id.movie}`}>
                  <button className="home--genres--genre--options--option">
                    Movies
                  </button>
                </Link>
                <Link to={`genre/tv/${genre.id.tv}`}>
                  <button className="home--genres--genre--options--option">
                    Tv Shows
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <List queryType="movie" query="popular" all={false} />
      <List queryType="tv" query="popular" all={false} />
      <List queryType="movie" query="top_rated" all={false} />
      <List queryType="tv" query="top_rated" all={false} />
    </>
  );
};

export default Home;
