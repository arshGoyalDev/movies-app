import "./styles/ProfileDetails.scss";

import { useState, useEffect } from "react";

import { useFetch } from "../../hooks";

import { modifyDate } from "../../utils";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProfileDetails = () => {
  const {id} = useSelector((state) => state.profileDetails.value);
  const data = useFetch(`person/${id}?language=en-US&`, false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      console.log(data);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <div className="profile-details-wrapper"></div>
      <div className="profile-details">
        {!loading ? (
          <>
        <div className="profile-details--header">
          <h3>{data.name}</h3>
          <button><FontAwesomeIcon icon={faXmark} /></button>
        </div>
            <div className="introduction">
              {data.profile_path ? (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                  alt={data.name}
                />
              ) : (
                <FontAwesomeIcon icon={faUser} />
              )}
              <div className="introduction--details">
                <h2>{data.name}</h2>
                {data.biography && <p className="biography">{data.biography}</p>}
                {data.birthday && <p>Born on: {modifyDate(data.birthday)}</p>}
                {data.place_of_birth && (
                  <p>Place of birth: {data.place_of_birth}</p>
                )}
                <p>Known for: {data.known_for_department}</p>
              </div>
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
