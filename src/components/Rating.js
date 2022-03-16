import "./styles/Rating.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  const decimalToPer = () => {
    let value = rating.toFixed(1);
    value *= 10;
    return <span>{value}%</span>;
  };

  return (
    <>
      {rating !== 0 && (
        <div className="rating">
          <FontAwesomeIcon icon={faStar} />
          <span>{decimalToPer()}</span>
        </div>
      )}
    </>
  );
};

export default Rating;
