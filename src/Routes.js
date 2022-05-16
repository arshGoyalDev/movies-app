import { Routes as RoutesWrapper, Route } from "react-router-dom";

import { Home, Movies } from "./pages";

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />

      <Route path="/movies" element={<Movies />}></Route>

      <Route path="*" element={<div>Nothing to see here</div>} />
    </RoutesWrapper>
  );
};

export default Routes;
