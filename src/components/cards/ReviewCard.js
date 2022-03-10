import './styles/ReviewCard.scss';

const ReviewCard = ({ data }) => {
  return (
    <a
      href={data.url}
      className="review-card"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="review-card--body">{data.content.slice(0, 150)}...</div>
      <div className="review-card--footer">
        <p className="author-name">{data.author}</p>
      </div>
    </a>
  );
};

export default ReviewCard;
