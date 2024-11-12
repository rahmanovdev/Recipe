import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import style from "./details.module.css";
import { FaStar } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const RecipeDetail = () => {
  const nav = useNavigate();
  const [detailData, setDetailData] = useState();
  const { id } = useParams(Number);
  async function getAll(params) {
    await axios
      .get("https://6731d3e77aaf2a9aff12528f.mockapi.io/api/v1/apiForKuhnya")
      .then((res) => {
        const result = res.data.filter((el) => el.id === id);
        setDetailData(result);
        console.log(detailData.map((el) => el));
      });
  }

  useEffect(() => {
    getAll();
  }, [id]);

  const hours =
    detailData && detailData.map((el) => Math.floor(el.cookingTime / 60));
  const minutes = detailData && detailData.map((el) => el.cookingTime % 60);
  return (
    <div className="container">
      {detailData &&
        detailData.map((el) => (
          <div className={style.content}>
            <img src={el.url} className={style.img} alt="" />
            <div className={style.text}>
              <h1>
                Название еды : <span>{el.title}</span>
              </h1>
              <h1>
                Время готовки:{" "}
                <span>
                  {hours > 0 ? `${hours} ч ${minutes} мин` : `${minutes} мин`}
                </span>
              </h1>
              <h1>
                Порции еды : <span>{el.Portions} шт</span>
              </h1>
              <h1>
                Ингредиенты еды :{" "}
                <span>
                  ( {el.incredients.map((el) => el + ", ").slice(0)} ){" "}
                </span>
              </h1>
              <h1>
                Оценка :
                <span>
                  {" "}
                  {el.rating}
                  <FaStar
                    style={{
                      color: "goldenrod",
                    }}
                  />{" "}
                  звезд
                </span>
              </h1>
              <h1>
                Шаги приготовления : <span>{el.cookingSteps} шт</span>
              </h1>
            </div>
            <p
              onClick={() =>
                nav(`/details/${Number(id) === 20 ? 1 : Number(id) + 1}`)
              }
              className={style.nexter}
            >
              <FaArrowAltCircleRight />
            </p>
          </div>
        ))}
    </div>
  );
};

export default RecipeDetail;
