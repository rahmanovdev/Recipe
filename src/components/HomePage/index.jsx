import React from "react";
import style from "./home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard";

const HomePage = () => {
  const [database, setDatabase] = useState();
  const [bestAll, setBestAll] = useState(false);
  const [sweet, setSweet] = useState(false);

  async function getAll() {
    await axios
      .get("https://6731d3e77aaf2a9aff12528f.mockapi.io/api/v1/apiForKuhnya")
      .then((res) => {
        setDatabase(res.data);
      });
  }

  useEffect(() => {
    getAll();
  }, []);

  // Фильтруем рецепты по сладким ингредиентам
  const filterSweets = (data) => {
    return data.filter((el) =>
      el.incredients.some(
        (ingredient) =>
          ingredient.toLowerCase().includes("сахар") ||
          ingredient.toLowerCase().includes("сливки")
      )
    );
  };

  return (
    <div className={style.home}>
      <div className="container">
        <div className={style.theBest}>
          <div className={style.tes}>

          <h1>Лучшие деликатесы</h1>
          <p
            onClick={() => setBestAll(!bestAll)}
          >
            {bestAll ? "Свернуть" : "Показать еще"}
          </p>
          </div>
          <div className={style.blocks}>
            {database &&
              database
                .filter((el) => el.rating === 5)
                .slice(0, bestAll ? database.length : 4)
                .map((el) => (
                  <RecipeCard el={el} key={el.id} />
                ))}
          </div>
        </div>

        <div className={style.Sweets}>
          <div className={style.tes}>

          <h1>Сладости</h1>
          <p
            onClick={() => setSweet(!sweet)}
          >
            {sweet ? "Свернуть" : "Показать еще"}
          </p>
          </div>
          <div className={style.blocks}>
            {database &&
              filterSweets(database) // Фильтруем сладкие рецепты
                .slice(0, sweet ? database.length : 4)
                .map((el) => (
                  <RecipeCard el={el} key={el.id} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
