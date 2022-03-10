import "./styles/CardImage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const CardImage = ({ imagePath, name }) => {
  return (
    <div className={`card-image ${!imagePath ? "no-image" : ""}`}>
      {!imagePath ? (
        <FontAwesomeIcon icon={faImage} />
      ) : (
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${imagePath}`}
          alt={name}
        />
      )}
    </div>
  );
};

export default CardImage;
