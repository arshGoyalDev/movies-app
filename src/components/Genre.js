import { useEffect, useState } from "react";

const Genre = ({ genreId, list }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    list.forEach((id) => {
      if (genreId === id.id) {
        setOutput(id.name);
      }
    });

    // eslint-disable-next-line no-unused-expressions
  }, []);

  return <div className="py-1 px-2 bg-neutral-800 rounded bg-opacity-70">{output}</div>;
};

export default Genre;
