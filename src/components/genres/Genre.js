import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Genre = ({ genreId, list, type }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    list.forEach((item) => {
      if (genreId === item.id) {
        setOutput(item.name);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link to={`/genres/${type}/${genreId}`}>
      <div className="text-white text-sm py-1 px-3 bg-neutral-800 rounded-3xl">
        {output}
      </div>
    </Link>
  );
};

export default Genre;
