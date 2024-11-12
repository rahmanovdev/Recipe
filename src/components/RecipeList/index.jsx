import React from "react";
import style from "./recipe.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import RecipeCard from "../RecipeCard";
const RecipeList = () => {
  const [all, setAll] = useState();
  async function getAll(params) {
    axios
      .get("https://6731d3e77aaf2a9aff12528f.mockapi.io/api/v1/apiForKuhnya")
      .then((res) => {
        setAll(res.data);
      });
  }
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className="container">
        <h1>Все ингредиенты</h1>
      <div className={style.all}>
        {all && all.map((el) => <RecipeCard key={el.id} el={el} />)}
      </div>
    </div>
  );
};

export default RecipeList;
