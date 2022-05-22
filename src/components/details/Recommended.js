import React from "react";
import { BackdropCard } from "../cards";

const Recommended = ({ data }) => {
  return (
    <div>
      <h4 className="font-medium px-10 md:px-28 lg:px-0">Recommended</h4>
      <div className="scrollbar flex gap-3 px-10 md:px-28 lg:px-0 mt-3 overflow-auto">
        {data.map((item) => (
          <BackdropCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
