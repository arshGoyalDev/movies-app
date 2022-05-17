import { useEffect, useState } from "react";
import { useFetch } from "../hooks";

import { useParams } from "react-router-dom";

const Details = ({ type }) => {
  const { id } = useParams();

  const data = useFetch(`${type}/${id}?language=en-US&`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!data) return;

    setLoading(false);
    console.log(data);
  }, [data]);

  return (
    <>
      {loading ? (
        ""
      ) : (
        <main className="py-10">
          <div className="flex flex-col gap-6 items-center">
            <div className="w-[50%] rounded-2xl overflow-hidden">
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt="backdrop"
                className="w-full"
              />
            </div>
            <div className="px-6">
              <h1 className="text-xl font-medium">{data.title ?? data.name}</h1>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {data.genres.map((genre) => (
                  <div className="text-sm text-neutral-500 dark:text-neutral-300 py-1 px-3 border-2 border-solid border-gray-400 dark:border-neutral-700 rounded-3xl">
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Details;
