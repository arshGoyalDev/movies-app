import List from "../components/List";
import OptionsBar from "../components/OptionsBar";
import Trending from "../components/Trending";

import { motion } from "framer-motion";

const Movies = () => {
  return (
    <motion.div
      className="mt-0"
      transition={{ duration: 0.5 }}
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OptionsBar />
      <Trending type="movie" />

      <div className="flex flex-col gap-8">
        <List type="movie" query="now_playing" />
        <List type="movie" query="popular" />
      </div>
    </motion.div>
  );
};

export default Movies;
