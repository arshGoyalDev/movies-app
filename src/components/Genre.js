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
    <div className="text-white font-medium text-sm py-1 px-2 bg-neutral-800 rounded">
      {output}
    </div>
  );
};

export default Genre;
