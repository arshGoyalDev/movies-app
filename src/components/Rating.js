// import starYellow from '../assets/images/star-yellow.svg';
import star from "../assets/images/rating.svg";

const Rating = ({ data }) => {
  return (
    <>
      {data === 0 ? (
        <></>
      ) : (
        <div className="flex gap-2 items-center">
          <img src={star} alt="star icon bg uicons" className="w-3" />
          <p className="text-[#ffbf00] text-sm pt-[1px]">{data}</p>
        </div>
      )}
    </>
  );
};

export default Rating;
