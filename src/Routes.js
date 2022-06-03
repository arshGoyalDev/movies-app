import { Routes as RoutesWrapper, Route } from "react-router-dom";

import { Home, Movies, TvShows, People, Details, PersonDetails, Upcoming, TopRated } from "./pages";

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

      <Route path="*" element={<div>Nothing to see here</div>} />
    </RoutesWrapper>
  );
};

export default Routes;
