import { useEffect, useState } from "react";
import { useFetch } from "../../hooks";

import { TrendingMobile } from "./";

const TrendingPeople = () => {
  const data = useFetch(`trending/person/day?`, "results");
  const [loading, setLoading] = useState(true);
  const [activeNum, setActiveNum] = useState(0);

  useEffect(() => {
    if (!data) return;

    setLoading(false);
    console.log(data);
  }, [data]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeNum === 19) {
        setActiveNum(0);
      } else {
        setActiveNum(activeNum + 1);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeNum]);

  return (
    <div className="mb-6 md:mb-10">
      <TrendingMobile
        loading={loading}
        data={data}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
        type={"people"}
      />
    </div>
  );
};

export default TrendingPeople;
