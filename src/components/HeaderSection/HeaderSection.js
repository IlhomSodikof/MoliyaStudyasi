import { useState } from "react";
import "../HeaderSection/HeaderSection.css";
import man from "../../assets/img/man.svg";
import { ArrowFill, BagIcon, Docs, OdinC } from "../../assets/svg/svg";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Modal from "../Modal/Modal";
import ModalСourse from "../Modal/ModalСourse";

const HeaderSection = ({ product }) => {
  const [openModalСourse, setOpenModalСourse] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(true);

  return (
    <div className="header__wrapper">
      <div className="container">
        <div className="header__section">
          <section className="header__part">
            <Fade left cascade>
              <div className="left__text">
                <h1>
                  Moliya Studiyasi — <p>Buxgalteriya ta'lim muassasasi</p>
                </h1>
                <p>
                  Malakali ustozlardan dars oling. Imtihonlarni muvaffaqiyatli
                  topshiring-u, <span>ish o'rniga ega bo'ling!</span>
                </p>
                <button
                  className="header__button"
                  // onClick={() => setOpenModalСourse(!openModalСourse)}
                >
                  <a href="#kurs" style={{color:"white"}}>Kursga yozilish {"⬇"}</a>
                </button>
              </div>
            </Fade>
            <Slide top>
              <div className="right__img">
                <img src={man} alt="" />
              </div>
            </Slide>
          </section>
        </div>

        <Slide top>
          <div className="header__info__banner">
            <div className="info__banner">
              <div className="banner__item">
                <div className="banner__icon">
                  <BagIcon />
                </div>
                <p>Ish bilan taʼminlaymiz!</p>
              </div>
              <div className="banner__item">
                <div className="banner__icon">
                  <OdinC />
                </div>
                <p>4 oy davomida Buxgalteriya va 1C dasturi</p>
              </div>
              <div className="banner__item">
                <div className="banner__icon">
                  <Docs />
                </div>
                <p>O’qish yakunida diplom va sertifikat beriladi</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
      {openModal ? (
        <Modal
          registerModal={registerModal}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ) : null}

      {openModalСourse ? (
        <ModalСourse
          product={product}
          registerModal={registerModal}
          openModal={openModalСourse}
          setOpenModal={setOpenModalСourse}
        />
      ) : null}
    </div>
  );
};

export default HeaderSection;
