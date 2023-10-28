import React from 'react';
import logo from '../../assets/img/logo-white.svg';
import footer from '../../assets/img/anime/footer.png';
import './Footer.css';
import {BsInstagram, BsFacebook, BsYoutube, BsTelegram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer__grid">
            <div className="footer__item">
              <img src={logo} alt="" />
              <a className="tel" href="tel:+998 99 876 44 44">
                +998 99 876 44 44
              </a>
              <p>Toshkent, Oloy Bozori tor ko'chasi, 64</p>
              <p>info@moliyastudiyasi.uz</p>
              <ul className="social__links">
                <li>
                  <a
                    href="https://www.instagram.com/moliya_studiyasi/?hl=ru"
                    target="_blank">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/moliya.studiyasi"
                    target="_blank">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCrTayMpOjH_eyqy_-ErIdXw"
                    target="_blank">
                    <BsYoutube />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/moliya_studiyasi" target="_blank">
                    <BsTelegram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__item map__part">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.4654412031437!2d69.2832553!3d41.3204913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8baeb969ae27%3A0xabd96ab0498f3c15!2sORIENT%20Business%20Center!5e0!3m2!1sru!2s!4v1681641900945!5m2!1sru!2s"
                frameBorder="0"
                className="map"
                style={{border: 0}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
              <div className="footer__img">
                <img src={footer} alt="" />
              </div>
            </div>
            <div className="footer__item">
              <ul className="nav__links">
                <li>
                  <a href="#">Kurslar</a>
                </li>
                <li>
                  <a href="#">Natijalar</a>
                </li>
                <li>
                  <a href="#">Jamoa</a>
                </li>
                <li>
                  <a href="#">Biz haqimizda</a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <ul className="nav__links">
                <li>
                  <a href="#">Online darslar</a>
                </li>
                <li>
                  <a href="#">Yangiliklar</a>
                </li>
                <li>
                  <a href="#">Bloglar</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
