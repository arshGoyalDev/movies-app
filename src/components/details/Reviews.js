import { Link } from "react-router-dom";

const Reviews = ({ data }) => {
  return (
    <div>
      <h4 className="font-medium px-10 md:px-28 lg:px-0">Reviews</h4>
      <div className="flex gap-3 px-10 md:px-28 lg:px-0 mt-3 overflow-auto">
        {data.map((review) => (
          <Link to={`review/${review.id}`}
            key={review.id}
            className="min-w-[320px] max-w-xs flex flex-col justify-center p-4 bg-gray-100 dark:bg-neutral-900 rounded-xl cursor-pointer focus:outline-none"
          >
            <p className="break-words">
              {review.content.length > 120
                ? review.content.slice(0, 120) + "..."
                : review.content}
            </p>

            <p className="break-words text-neutral-400 mt-2">
              by {review.author}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
