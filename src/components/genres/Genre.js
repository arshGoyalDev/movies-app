import { useEffect, useState } from "react";

const Genre = ({ genreId, list }) => {
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
    <div className="text-white text-sm py-1 px-3 bg-neutral-800 rounded-3xl">
      {output}
    </div>
  );
};

export default Genre;
