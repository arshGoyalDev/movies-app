import "./styles/ProfileDetails.scss";

import { useState, useEffect } from "react";

import { useFetch } from "../hooks";

import { modifyDate } from "../utils";

import { clearProfileDetails } from "../features/profileSlice";

import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.profileDetails.value);
  const data = useFetch(`person/${id}?language=en-US&`, false);
  const images = useFetch(`person/${id}}/images?`, "profiles");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && images) {
      setLoading(false);
    }
  }, [data, images]);

  const closeProfileDetails = () => {
    dispatch(clearProfileDetails());
  };

  return (
    <>
      <div
        className="profile-details-wrapper"
        onClick={closeProfileDetails}
      ></div>
      <div className="profile-details">
        {!loading ? (
          <>
            <div className="profile-details--header">
              <h3>{data.name}</h3>
              <button onClick={closeProfileDetails}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="profile-details--body">
              <div className="introduction">
                {data.profile_path ? (
                  <img
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                    alt={data.name}
                  />
                ) : (
                  <div className="no-images">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                )}
                <div className="introduction--details">
                  <h2>{data.name}</h2>
                  {data.biography && (
                    <p className="biography">{data.biography}</p>
                  )}
                  {data.birthday && (
                    <p>
                      Born on: <span>{modifyDate(data.birthday)}</span>
                    </p>
                  )}
                  {data.place_of_birth && (
                    <p>
                      Place of birth: <span>{data.place_of_birth}</span>
                    </p>
                  )}
                  <p>
                    Known for: <span>{data.known_for_department}</span>
                  </p>
                </div>
              </div>
              {images.length > 1 && (
                <div className="images">
                  <h3>Some Images</h3>
                  <div>
                    {images.slice(1, images.length).map((image) => (
                      <img
                        key={image.file_path}
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                        alt={data.name}
                      />
                    ))}
                  </div>
                </div>
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
