import { useEffect, useState } from "react";
import { useFetch } from "../../hooks";

import { TrendingMobile, TrendingPeopleLarge } from "./";

const TrendingPeople = () => {
  const data = useFetch(`trending/person/day?`, "results");
  const [loading, setLoading] = useState(true);
  const [activeNum, setActiveNum] = useState(0);

  useEffect(() => {
    if (!data) return;

    setLoading(false);
  }, [data]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeNum === 15) {
        setActiveNum(0);
      } else {
        setActiveNum(activeNum + 1);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeNum]);

  return (
    <div className="mb-6 md:mb-10">
      <TrendingPeopleLarge
        loading={loading}
        data={data}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
      />
      
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
