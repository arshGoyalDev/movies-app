import { useEffect, useState } from "react";

import "./styles/Categories.scss";

import { fetchData } from "../utils";

import { Link, Outlet, useParams } from "react-router-dom";

const Categories = ({ query }) => {
  const [categoryList, setCategoryList] = useState("");
  const params = useParams();

  useEffect(() => {
    fetchData(
      `https://api.themoviedb.org/3/genre/${
        query ? query : params.query
      }/list?api_key=46f3e66941cef78aa9e97f804729bc67&language=en-US`,
      setCategoryList,
      false
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="categories">
        {categoryList !== "" ? (
          categoryList.map((category) => (
            <Link key={category.id} to={`/category/${query}/${category.id}`}>
              <button className="categories--category">{category.name}</button>
            </Link>
          ))
        ) : (
          <div className="loading--category"></div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
