import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const DetailsWrapper = ({query, setScrollTop}) => {
  const navigate = useNavigate();

  return (
    <div
      className="details--wrapper"
      onClick={() => {
        navigate(`/${query}`);
        setScrollTop(false);
      }}
    >
      <div className="close-btn">
        <button>
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
      </div>
    </div>
  );
};

export default DetailsWrapper;
