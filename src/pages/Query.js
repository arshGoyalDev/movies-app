import Trending from "../components/Trending";
import List from "../components/List";
import Genres from "../components/Genres";

import { Outlet } from "react-router-dom";

const Query = ({ type}) => {
  return (
    <>
      <Trending queryType={type} />
      <Genres query={type} />
      <List
        queryType={type}
        query={type === "movie" ? "upcoming" : "on_the_air"}
        all={true}
      />
      <List
        heading={false}
        queryType={type}
        query={type === "movie" ? "upcoming" : "on_the_air"}
        all={true}
        page={2}
      />
      <List queryType={type} query="popular" all={true} />
      <List
        heading={false}
        queryType={type}
        query="popular"
        all={true}
        page={2}
      />
      <List queryType={type} query="top_rated" all={true} />
      <List
        heading={false}
        queryType={type}
        query="top_rated"
        all={true}
        page={2}
      />

      <Outlet />
    </>
  );
};

export default Query;
