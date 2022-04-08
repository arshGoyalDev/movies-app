import "./styles/ProfileCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { useNavigate } from "react-router-dom";

const ProfileCard = ({ data }) => {
  const navigate = useNavigate();

  const showProfileDetails = () => {
    navigate(`/people/${data.id}`);
  };

  return (
    <div key={data.name} className="profile-card" onClick={showProfileDetails}>
      <div className={`profile-card--photo ${!data.profile_path ? "not" : ""}`}>
        {!data.profile_path ? (
          <FontAwesomeIcon icon={faUser} />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            loading="lazy"
          />
        )}
      </div>

      <div className="profile-card--body">
        <p className="name">{data.name}</p>
        <p className="role">{data.character ? data.character : data.job}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
