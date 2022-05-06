// import starYellow from '../assets/images/star-yellow.svg';
import star from "../assets/images/rating.svg";

const Rating = ({ data }) => {
  return (
    <>
      {data === 0 ? (
        <></>
      ) : (
        <div className="flex gap-2 items-center">
          <img src={star} alt="star icon bg uicons" className="w-3 lg:w-5" />
          <p className="text-[#ffbf00] text-sm font-semibold lg:text-lg pt-[1px]">{data}</p>
        </div>
      )}
    </>
  );
};

export default Rating;
