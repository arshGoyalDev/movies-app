import { Routes as RoutesWrapper, Route } from "react-router-dom";

import { Home, Movies, TvShows, Details } from "./pages";

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />

      <Route path="/movies" element={<Movies />}>
        <Route path=":id" element={<Details />} />
      </Route>

      <Route path="/tv-shows" element={<TvShows />}></Route>

      <Route path="*" element={<div>Nothing to see here</div>} />
    </RoutesWrapper>
  );
};

export default Routes;
