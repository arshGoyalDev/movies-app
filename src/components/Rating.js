// import starYellow from '../assets/images/star-yellow.svg';
// import star from "../assets/images/rating.svg";
import { StarIcon } from "./icons";

const Rating = ({ data }) => {
  return (
    <>
      {data === 0 ? (
        <></>
      ) : (
        <div className="flex gap-2 items-center">
          {/* <img /> */}
          <StarIcon className="rating-icon w-3 h-3 lg:w-5 lg:h-5" />
          {/* <img src={star} alt="star icon bg uicons" className="w-3 lg:w-5" /> */}
          <p className="text-primary-dark text-sm font-semibold lg:text-lg pt-[1px] lg:pt-0.5">
            {data}
          </p>
        </div>
      )}
    </>
  );
};

export default Rating;
