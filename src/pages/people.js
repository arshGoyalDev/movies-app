import {useLocation, Outlet} from "react-router-dom";

import OptionsBar from "../components/OptionsBar";
import {TrendingPeople} from "../components/Trending";
import List from "../components/List";

const People = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("/people/") ? (
        <Outlet/>
      ) : (
        <div>
          <OptionsBar/>
          <TrendingPeople/>

          <div className="flex flex-col gap-8">
            <List type="person" query="popular"/>
          </div>
        </div>
      )}
    </>
  );
};

export default People;
