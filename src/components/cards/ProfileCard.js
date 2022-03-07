import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const ProfileCard = ({ data }) => {
  return (
    <div key={data.name} className="details--cast--card">
      <div
        className={`details--cast--card--photo ${
          !data.profile_path ? "not" : ""
        }`}
      >
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

      <div className="details--cast--card--body">
        <p className="name">{data.name}</p>
        <p className="role">{data.character ? data.character : data.job}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
