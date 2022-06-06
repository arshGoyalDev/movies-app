const ImagesList = ({ imagesList }) => {
  return (
    <div className="px-1">
      <h3 className="capitalize font-medium px-10 md:px-28 lg:px-0">Images</h3>
      <div className="w-full flex gap-4 mt-5 overflow-auto px-10 md:px-28 lg:px-0">
        {imagesList.map((image) => (
          <div
            key={image.file_path}
            className="min-w-[140px] max-w-[140px] rounded-lg overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt={image.file_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesList;
