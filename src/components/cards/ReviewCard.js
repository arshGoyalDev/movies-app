const ReviewCard = ({ data }) => {
  return (
    <a
      href={data.url}
      className="card"
      target="_blank"
      rel="norefferer noopener"
    >
      <div className="card--body">{data.content.slice(0, 150)}...</div>
      <div className="card--footer">
        <p className="author-name">{data.author}</p>
      </div>
    </a>
  );
};

export default ReviewCard;
