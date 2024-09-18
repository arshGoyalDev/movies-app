// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { ImageIcon, StarSolidIcon } from "../icons";
import { useState } from "react";

const BackdropCard = ({ data }) => {

  const navigate  = useNavigate();

  const [visible, setVisible] = useState(false);
  return (
    <div
    onClick={() => {
      navigate(data.title ? `/movies/${data.id}` : `/tv-shows/${data.id}`);
    }}
      className="relative min-w-[252px] h-36 lg:min-w-[340px] lg:h-48 rounded-2xl cursor-pointer overflow-hidden focus:outline-none"
    >
      <div className="absolute grid place-items-center bg-gray-100 dark:bg-neutral-900 w-full h-full rounded-lg overflow-hidden">
        {data.backdrop_path ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt={data.name}
            className="w-full h-full rounded-lg"
          />
        ) : (
          <ImageIcon className="icon w-10 h-10" />
        )}
      </div>
      <div
        className={`absolute z-[10] w-full h-full duration-500 ${
          data.backdrop_path ? "" : ""
        } ${data.backdrop_path ? "" : ""}`}
        onMouseEnter={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <div
          className={`absolute w-full py-2 px-3 xl:py-4 xl:px-5 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-1 ${
            visible ? "bottom-0" : "bottom-0 xl:-bottom-full"
          } bg-black bg-opacity-40 backdrop-blur-xl rounded-t-2xl transition-all duration-700`}
        >
          {data.title ? (
            <h4 className="font-medium text-white">
              {data.title.length > 20
                ? `${data.title.slice(0, 20)}...`
                : data.title}
            </h4>
          ) : (
            <h4 className="font-medium text-white">
              {data.name.length > 20
                ? `${data.name.slice(0, 20)}...`
                : data.name}
            </h4>
          )}

          <div className="flex items-center gap-2 w-max">
            <StarSolidIcon className="w-3 h-3 rating-icon" />
            <span className="text-white text-xs font-medium pt-0.5">
              {data.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackdropCard;
