import {Routes as RoutesWrapper, Route} from "react-router-dom";

import {
  Home,
  Movies,
  TvShows,
  People,
  Details,
  PersonDetails,
  Upcoming,
  TopRated,
  Genres,
} from "./pages";

import {GenreResults} from "./components/genres";
import {FullReview, Video} from "./components/details";

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home/>}/>

      <Route path="/movies" element={<Movies/>}>
        <Route path=":id" element={<Details type="movie"/>}>
          <Route path="video/:videoId" element={<Video/>}/>
          <Route path="review/:reviewId" element={<FullReview/>}/>
        </Route>
      </Route>

      <Route path="/tv-shows" element={<TvShows/>}>
        <Route path=":id" element={<Details type="tv"/>}>
          <Route path="video/:videoId" element={<Video/>}/>
          <Route path="review/:reviewId" element={<FullReview/>}/>
        </Route>
      </Route>

      <Route path="/people" element={<People/>}>
        <Route path=":personId" element={<PersonDetails/>}/>
      </Route>

      <Route path="/upcoming" element={<Upcoming/>}/>
      <Route path="/top-rated" element={<TopRated/>}/>

      <Route path="/genres" element={<Genres/>}>
        <Route path=":type/:genreId" element={<GenreResults/>}/>
      </Route>

      <Route path="*" element={<div>Nothing to see here</div>}/>
    </RoutesWrapper>
  );
};

export default Routes;
