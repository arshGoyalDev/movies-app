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
    <div className="font-medium text-black dark:text-white text-sm py-1 px-2 bg-gray-200 dark:bg-neutral-800 bg-opacity-60 dark:bg-opacity-70 rounded">
      {output}
    </div>
  );
};

export default Genre;
