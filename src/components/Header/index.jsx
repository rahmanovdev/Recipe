import React from "react";
import style from "./header.module.css";
import img from "../../assets/4047768.png";
import { MdOutlineFavorite } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const nav = useNavigate();
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);
  console.log(value);
  function handleSearch() {
      nav(`/search/${value}`);
      setValue("");
    }

  const handleKeyDown = (event) => {
    if (event === "Enter") {
      handleSearch();
      setValue("");
    }
  };
  return (
    <header className="">
      <div className="container">
        <div className={style.header}>
          <div onClick={() => nav("/")} className={style.hea}>
            <img width={50} src={img} alt="" />
            <img className={style.logo} src={logo} alt="" />
            <div className={style.burger}>
              <h2 onClick={() => (modal ? setModal(false) : setModal(true))}>
                <RxHamburgerMenu />
              </h2>
              {modal ? (
                <div className={style.modal}>
                  <a href="/favorites">Любимые</a>
                  <a href="/"> На главную</a>
                  <a href="/allRecipe">Список рецептов </a>
                </div>
              ) : null}
            </div>
          </div>
          <div className={style.navs}>
            <Link to={"/"}>На главную</Link>
            <Link to={"/allRecipe"}>Список рецептов</Link>
            <Link to={"/favorites"}>Любимые</Link>
          </div>
          <div className={style.der}>
            <div className={style.inp}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Искать по ингредиентам"
                onKeyDown={(e) => handleKeyDown(e.key)}
              />
              <button onClick={() => handleSearch()}>искать</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
