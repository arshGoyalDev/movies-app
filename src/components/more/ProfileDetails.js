import { useState, useEffect } from "react";

import { fetchProfileDetails } from "../../utils";

const ProfileDetails = ({ profileDetails, setProfileDetails }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfileDetails(profileDetails.id, setData, setLoading);
  }, []);

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
                  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                />
              ) : (
                ""
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
