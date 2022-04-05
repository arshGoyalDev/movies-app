import "./styles/Review.scss";

import { useSelector, useDispatch } from "react-redux";

import { hideReview } from "../features/reviewSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const dispatch = useDispatch();
  const { author, content} = useSelector(
    (state) => state.review.value
  );

  const closeReview = () => {
    dispatch(hideReview());
  };

  return (
    <>
      <div className="review-wrapper" onClick={closeReview}></div>
      <div className="review">
        <div className="review--header">
          <h3>Review</h3>
          <button onClick={closeReview}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="review--body">
          <p className="content">{content}</p>
          <p className="author-name">
            by <span>{author}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
