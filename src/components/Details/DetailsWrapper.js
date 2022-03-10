import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const DetailsWrapper = ({query, setDetailsVisible}) => {
  const navigate = useNavigate();

  return (
    <div
      className="details--wrapper"
      onClick={() => {
        navigate(`/${query}`);
        setDetailsVisible(false);
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
