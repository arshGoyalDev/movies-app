import "./styles/Rating.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating, boxStyle }) => {
  const decimalToPer = () => {
    let value = rating.toFixed(1);
    value *= 10;
    return <span>{value}%</span>;
  };

  return (
    <>
      {rating !== 0 && (
        <div className={`rating ${boxStyle ? "box-style" : ""}`}>
          <FontAwesomeIcon icon={faStar} />
          <span>{decimalToPer()}</span>
        </div>
      )}
    </>
  );
};

Rating.defaultProps = {
  rating: 0,
  boxStyle: false,
};

export default Rating;
