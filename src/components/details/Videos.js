import { PlaySolidIcon } from "../icons";

const Videos = ({ data, backdrop }) => {
  const filterVideos = () => {
    const filteredVideos = data.reverse().filter((video) => {
      let outputVideo;
      const videoName = video.name.toLowerCase();

      if (
        videoName.includes("trailer") ||
        videoName.includes("teaser") ||
        videoName.includes("Featurette")
      ) {
        outputVideo = video;
      }
      return outputVideo;
    });

    return filteredVideos;
  };

  return (
    <>
      {filterVideos().length !== 0 && (
        <div>
          <h4 className="font-medium px-10 md:px-28 lg:px-0">Videos</h4>
          <div className="flex gap-3 px-10 md:px-28 lg:px-0 mt-3 overflow-auto">
            {filterVideos().map((video) => (
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
                  className={`absolute z-[2] w-full h-full flex items-end p-2 ${
                    backdrop ? "bg-black bg-opacity-40" : ""
                  }`}
                >
                  <div className="w-full py-2 px-4 backdrop-blur-xl bg-black bg-opacity-20 rounded-xl overflow-hidden">
                    <h4 className="font-medium text-white">
                      {video.name.length > 25
                        ? `${video.name.slice(0, 25)}...`
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
      )}
    </>
  );
};

export default Videos;
