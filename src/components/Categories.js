import { useEffect, useState } from "react";

import "./styles/Categories.scss";

import { fetchData } from "../utils";

import { Link } from "react-router-dom";

const Categories = ({ query, setSelectedCategory }) => {
  const [categoryList, setCategoryList] = useState("");

  useEffect(() => {
    fetchData(
      `https://api.themoviedb.org/3/genre/${query}/list?api_key=46f3e66941cef78aa9e97f804729bc67&language=en-US`,
      setCategoryList,
      false
    );
    // eslint-disable-next-line
  }, []);

  const clickHandler = (e) => {
    setSelectedCategory(e.target.innerHTML.replace("&amp;", "&"));
  };

  return (
    <div className="categories">
      {categoryList !== "" ? (
        categoryList.map((category) => (
          <Link key={category.id} to={`/category/${query}/${category.id}`}>
            <button className="categories--category" onClick={clickHandler}>
              {category.name}
            </button>
          </Link>
        ))
      ) : (
        <div className="loading--category"></div>
      )}
    </div>
  );
};

export default Categories;
