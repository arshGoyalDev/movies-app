import { useDispatch } from "react-redux";
import { showReview } from "../../features/reviewSlice";
import "./styles/ReviewCard.scss";

const ReviewCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      showReview({
        id: data.id,
        visible: true,
        author: data.author,
        content: data.content,
        createdDate: data.created_at,
      })
    );
  };

  return (
    <div className="review-card" onClick={handleClick}>
      <div className="review-card--body">{data.content.slice(0, 150)}...</div>
      <div className="review-card--footer">
        <p className="author-name">{data.author}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
