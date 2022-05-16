import { Routes as RoutesWrapper, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Home, Movies } from "./pages";

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <RoutesWrapper location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />}></Route>

        <Route path="*" element={<div>Nothing to see here</div>} />
      </RoutesWrapper>
    </AnimatePresence>
  );
};

export default Routes;
