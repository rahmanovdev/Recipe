import React from "react";
import style from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.footer}>
          <div className={style.footerTop}>
            <div className={style.des}>
              <h1>Tastebite</h1>
              <p className={style.ps}>
                «С другой стороны, мы осуждаем с праведным негодованием и
                неприязнью тех людей, которые поддаются обольщению и
                развращаются чарами сиюминутных удовольствий».
              </p>
            </div>
            <div className={style.blocks}>
              <div className={style.block}>
                <h3>Вкусняшка</h3>
                <p>О нас</p>
                <p>Карьера</p>
                <p>Связаться с нами</p>
                <p>Отзывы</p>
              </div>
              <div className={style.block}>
                <h3>Правовая информация</h3>
                <p>Условия использования</p>
                <p>Положения</p>
                <p>Файлы cookie</p>
                <p>Авторское право</p>
              </div>
              <div className={style.block}>
                <h3>Мы в соцсетях</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Youtube</p>
              </div>
            </div>
          </div>
          <div >
            <div className={style.footerBottom}>

            <div className={style.year}>

            <p>© 2023 Tastebite - все права защищены</p>
            </div>

            <p className={style.icons}>
              <span>
                <FaFacebook />{" "}
              </span>
              <span>
                <FaInstagram />{" "}
              </span>
              <span>
                <CiTwitter />{" "}
              </span>
              <span>
                <FaYoutube />{" "}
              </span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
