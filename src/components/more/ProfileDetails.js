import './styles/ProfileDetails.scss';

import { useState, useEffect } from "react";

import { fetchProfileDetails } from "../../utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const ProfileDetails = ({ profileDetails, setProfileDetails }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfileDetails(profileDetails.id, setData, setLoading);
  }, [profileDetails]);

  console.log(data);

  return (
    <>
      <div className="profile-details-wrapper"></div>
      <div className="profile-details">
        {!loading ? (
          <>
            <div className="introduction">
              {data.profile_path ? (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                  alt={data.name}
                />
              ) : (
                <FontAwesomeIcon icon={faUser}/>
              )}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProfileDetails;
