import React from "react";

const Reviews = ({ data }) => {
  return (
    <div>
      <h4 className="font-medium px-10 md:px-28 lg:px-0">Reviews</h4>
      <div className="scrollbar flex gap-3 px-10 md:px-28 lg:px-0 mt-3 overflow-auto">
        {data.map((review) => (
          <div
            key={review.id}
            className="min-w-[320px] flex flex-col justify-center p-4 bg-gray-200 dark:bg-neutral-800 rounded-xl"
          >
            <p className="break-words">
              {review.content.length > 120
                ? review.content.slice(0, 120) + "..."
                : review.content}
            </p>

            <p className="break-words text-neutral-400 mt-2">
              {" "}
              by {review.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
