import { ReviewCard } from "../cards";

const Reviews = ({ data }) => {
  return (
    <>
      {data.results.length !== 0 && (
        <div className="details--reviews">
          <h3>Reviews</h3>
          <div className="details--reviews--cards">
            {data.results.map((review) => (
              <ReviewCard key={review.id} data={review} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
