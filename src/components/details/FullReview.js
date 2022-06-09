import { useEffect, useState } from "react";
import { useFetch } from "../../hooks";

import { useNavigate, useParams } from "react-router-dom";
import { CloseIcon } from "../icons";

const FullReview = () => {
  const { reviewId } = useParams();
  const navigate = useNavigate();

  const reviewData = useFetch(`review/${reviewId}?`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!reviewData) return;
    setLoading(false);
  }, [reviewData]);

  return (
    <div className="fixed inset-0 z-20 grid place-items-center animate-fade-in">
      <div
        onClick={() => navigate(-1)}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-black bg-opacity-50"
      ></div>

      <div className="w-[90%] sm:w-80 lg:w-[500px] z-50 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-neutral-300 dark:border-neutral-800">
          <h2 className="text-lg font-medium">Review</h2>
          <button onClick={() => navigate(-1)} className="p-1 rounded-full">
            <CloseIcon className="w-6 h-6 icon" />
          </button>
        </div>
        <div className="py-5 px-5 max-h-[300px] md:max-h-[400px] overflow-auto">
          {loading ? (
            <>
              <div className="w-72 h-5 animate-skeleton rounded-md"></div>
              <div className="w-full h-64 mt-5 animate-skeleton rounded-md"></div>
            </>
          ) : (
            <>
              <h3 className="text-neutral-600 dark:text-neutral-500">
                by
                <span className="font-semibold text-black dark:text-white ml-2">
                  {reviewData.author}
                </span>
              </h3>
              <p className="mt-5 text-black dark:text-neutral-300">
                {reviewData.content}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullReview;
