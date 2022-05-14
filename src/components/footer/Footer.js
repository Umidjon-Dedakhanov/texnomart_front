import React from "react";
import "./Footer.css";
import Playmarket from "../../assets/playmarket-logo.svg";
import { FaFacebook, FaTelegramPlane, FaInstagram, FaYoutube, } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="top">
          <div className="contact">
            <p>Возник вопрос? Звоните</p>
            <h2>+998 71 209 99 44</h2>
            <p>Телефон доверия</p>
            <h2>+998 97 125 99 44</h2>

            <div className="social_media">
              <a href="https://texnomart.uz/">
                <FaFacebook id="icon" />
              </a>
              <a href="https://texnomart.uz/">
                <FaTelegramPlane id="icon" />
              </a>
              <a href="https://texnomart.uz/">
                <FaInstagram id="icon" />
              </a>
              <a href="https://texnomart.uz/">
                <FaYoutube id="icon" />
              </a>
            </div>

            <img src={Playmarket} alt="" />

            <span>
              <a href="https://texnomart.uz/">Адреса магазинов Ташкент</a>
            </span>
          </div>

          <ul className="big">
            <li>
              <h3>Компания</h3>
              <a href="https://texnomart.uz/">B2B продажи</a>
              <a href="https://texnomart.uz/">О Техномарт</a>
              <a href="https://texnomart.uz/">Новости и обзоры</a>
              <a href="https://texnomart.uz/">Проверка IMEI</a>
            </li>
            <li>
              <h3>Информация</h3>
              <a href="https://texnomart.uz/">Бесплатная доставка</a>
              <a href="https://texnomart.uz/">Бонусная система</a>
              <a href="https://texnomart.uz/">Работа в Техномарт</a>
              <a href="https://texnomart.uz/">Личный кабинет</a>
              <a href="https://texnomart.uz/">Контактные номера</a>
            </li>
            <li>
              <h3>Помощь покупателю</h3>
              <a href="https://texnomart.uz/">Покупка в рассрочку</a>
              <a href="https://texnomart.uz/">Возврат товара</a>
              <a href="https://texnomart.uz/">Гарантия на товары</a>
              <a href="https://texnomart.uz/">Часто задаваемые вопросы</a>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <span>
            2016-2022 ©Texnomart.uz. Все права защищены. Указанная стоимость
            товаров и условия их <br />
            приобретения действительны по состоянию на текущую дату
          </span>

          <ul className="images">
            <li>
              <img
                src="https://texnomart.uz/files/global/new-photo/img/payment-type/paymart.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://texnomart.uz/files/global/new-photo/img/payment-type/paymart.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://texnomart.uz/files/global/new-photo/img/payment-type/paymart.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://texnomart.uz/files/global/new-photo/img/payment-type/paymart.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://texnomart.uz/files/global/new-photo/img/payment-type/paymart.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
