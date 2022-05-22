import { useEffect, useState } from "react";
import { PlaySolidIcon } from "../icons";

const Videos = ({ data, backdrop }) => {
  const [videos, setVideos] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filteredVideos = videos.reverse().filter((video) => {
      let outputVideo;
      let videoName = video.name.toLowerCase();

      if (videoName.includes("trailer") || videoName.includes("teaser")) {
        outputVideo = video;
      }

      return outputVideo;
    });

    setVideos(filteredVideos);
    setLoading(false);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!loading && (
        <>
          <div>
            <h4 className="font-medium px-10 md:px-28 lg:px-0">Videos</h4>
            <div className="scrollbar flex gap-3 px-10 md:px-28 lg:px-0 mt-3 overflow-auto">
              {videos.length !== 0 &&
                videos.map((video) => (
                  <div
                    key={video.id}
                    className="relative min-w-[280px] h-[160px] bg-gray-200 dark:bg-neutral-800 rounded-2xl overflow-hidden"
                  >
                    <div className="absolute z-[1] w-full h-full">
                      <img
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w500${backdrop}`}
                        alt="backdrop"
                        className="w-full h-full"
                      />
                    </div>
                    <div
                      className={`absolute z-[2] w-full h-full flex items-end ${
                        backdrop ? "bg-black bg-opacity-40" : ""
                      }`}
                    >
                      <div className="w-full py-2 px-4 backdrop-blur-xl bg-black bg-opacity-20 rounded-t-2xl">
                        <h4 className="font-medium text-white">
                          {video.name.length > 30
                            ? `${video.name.slice(0, 30)}...`
                            : video.name}
                        </h4>
                      </div>
                    </div>
                    <button className="absolute z-[3] top-1/2 -translate-y-2/3 left-1/2 -translate-x-1/2 p-3 bg-neutral-700 rounded-full">
                      <PlaySolidIcon className="rating-icon w-4 h-4" />
                    </button>
                  </div>
                  
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Videos;
