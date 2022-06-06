import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import People from "./pages/People";

import Upcoming from "./pages/Upcoming";
import TopRated from "./pages/TopRated";
import Genres from "./pages/Genres";

import Details from "./pages/Details";
import PersonDetails from "./pages/PersonDetails";

import { GenreResults } from "./components/genres";

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />

      <Route path="/movies" element={<Movies />}>
        <Route path=":id" element={<Details type="movie" />} />
      </Route>

      <Route path="/tv-shows" element={<TvShows />}>
        <Route path=":id" element={<Details type="tv" />} />
      </Route>

      <Route path="/people" element={<People />}>
        <Route path=":personId" element={<PersonDetails />} />
      </Route>

      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/top-rated" element={<TopRated />} />

      <Route path="/genres" element={<Genres />}>
        <Route path=":type/:genreId" element={<GenreResults />} />
      </Route>

      <Route path="*" element={<div>Nothing to see here</div>} />
    </RoutesWrapper>
  );
};

export default Routes;
