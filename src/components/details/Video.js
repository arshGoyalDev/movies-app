import {useNavigate, useParams} from "react-router-dom";

import {CloseIcon} from "../icons";

const Video = () => {
  const {videoId} = useParams();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-20 grid place-items-center animate-fade-in">
      <div
        onClick={() => navigate(-1)}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-black bg-opacity-50"
      ></div>

      <div className="flex flex-col items-end justify-center gap-5 w-[90%] sm:w-[500px] lg:w-[700px]">
        <button
          onClick={() => navigate(-1)}
          className="z-50 bg-gray-200 dark:bg-neutral-900 p-3 rounded-full mr-2"
        >
          <CloseIcon className="icon w-6 h-6"/>
        </button>

        <div className="w-full h-[250px] sm:h-[350px] lg:h-[450px] z-50 rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?controls=0`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
