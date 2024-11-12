import React, { useState, useEffect } from "react";
import style from "./card.module.css";
import { IoStar } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
const RecipeCard = ({ el }) => {
  const location = useLocation();
  console.log(location.pathname);
  const nav = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };

  const toggleFavorite = () => {
    const favorites = getFavorites();
    const index = favorites.findIndex((item) => item.id === el.id);

    if (index === -1) {
      favorites.push(el);
    } else {
      favorites.splice(index, 1);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(index === -1);

    // Обновляем страницу, если находимся на странице избранного
    if (location.pathname === "/favorites") {
      window.location.reload();
    }
  };

  useEffect(() => {
    const favorites = getFavorites();
    const isInFavorites = favorites.some((item) => item.id === el.id);
    setIsFavorite(isInFavorites);
  }, [el.id]);

  const hours = Math.floor(el.cookingTime / 60);
  const minutes = el.cookingTime % 60;
  const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <a key={i} className={style.star}>
          <IoStar
            style={{
              color: i < rating ? "goldenrod" : "black",
            }}
          />
        </a>
      );
    }
    return stars;
  };

  return (
    <div className={style.card}>
      <img onClick={() => nav(`/details/${el.id}`)} className={style.img} src={el.url} alt={el.title} />
      <div className={style.star}>
        <div className={style.delAndStars}>
          <div
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            {getStars(el.rating)}
          </div>
          <span onClick={toggleFavorite}>
            {location.pathname === "/favorites" ? (
              <button>Удалить</button>
            ) : isFavorite ? (
              <MdFavorite />
            ) : (
              <MdFavoriteBorder />
            )}
          </span>
        </div>
        <h3 onClick={() => nav(`/details/${el.id}`)}>{el.title}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
