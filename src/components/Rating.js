import { StarSolidIcon } from "./icons";

const Rating = ({ data }) => {
  return (
    <>
      {data === 0 && (
        <div className="flex gap-2 lg:gap-3 items-center border-2 border-solid border-primary-dark w-max px-3 py-0.5 rounded-md">
          <StarSolidIcon className="rating-icon w-3 h-3 lg:w-4 lg:h-4" />
          <p className="text-primary-dark text-sm font-semibold lg:text-lg lg:pt-0.5">
            {data.toFixed(1)}
          </p>
        </div>
      )}
    </>
  );
};

export default Rating;
