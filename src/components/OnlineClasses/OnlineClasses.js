import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./OnlineClasses.css";
import Onlineimg from "../../assets/img/you.png";
import { ArrowFill } from "../../assets/svg/svg";
import Modal from "../Modal/Modal";
import Slide from "react-reveal/Slide";

const OnlineClasses = () => {
  const users = useSelector(({ user }) => user);

  const [openModal, setOpenModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(true);

  const handleModal = () => {
    if (users?.isAuthenticated) {
      window.open(users.user?.privateLink, "_blank");
    } else {
      setOpenModal(!openModal);
    }
  };

  return (
    <div className="container" id="lessons">
      <div className="onlineClasses_full">
        <Slide top cascade>
          <div className="onlineClasses_text">
            <h1>Bepul video-dars</h1>
            <h4>
              Buxgalteriya sohasini o'rganish istagida bo'lganlar va sohada
              faoliyat olib borayotganlar uchun Moliya Studiyasi'ning YouTube
              sahifasiga Bepul video-darslar joylab boriladi.
            </h4>
            <p>
            Videodarslar nafaqat sizni yangi kasb o'rganishingizga, balki buxgalter sifatida malakangizni oshirishingizga ham xizmat qiladi.
            </p>
            
            <div className="onlineClasses_btn">
              <button onClick={handleModal}>
                Videodarslarni ko’rish <ArrowFill />
              </button>
            </div>
          </div>
        </Slide>

        <Slide right>
          <div className="onlineClasses_img">
            <img src={Onlineimg} alt="" />
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
    </div>
  );
};

export default OnlineClasses;
