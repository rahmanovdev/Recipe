import React, { useState, useEffect } from "react";
import style from "./search.module.css";
import { useParams } from "react-router";
import axios from "axios";
import RecipeCard from "../RecipeCard";

const SearchResults = () => {
  const [seAll, setSeAll] = useState([]);
  const { request } = useParams();

  async function getAll() {
    const res = await axios.get(
      "https://6731d3e77aaf2a9aff12528f.mockapi.io/api/v1/apiForKuhnya"
    );

    const filteredResults = res.data.filter((recipe) =>
      recipe.incredients.some((ingredient) =>
        ingredient.toLowerCase().includes(request.toLowerCase())
      )
    );

    setSeAll(filteredResults);
  }

  useEffect(() => {
    getAll();
  }, [request]);
  console.log(seAll);

  return (
    <div className={style.search}>
      <div className="container">
        <h1>Результаты поиска для "{request}"</h1>
        <div className={style.results}>
          {seAll.length > 0 ? (
            seAll.map((el) => <RecipeCard el={el} key={el.id} />)
          ) : (
            <p>Нет рецептов для этого запроса.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
