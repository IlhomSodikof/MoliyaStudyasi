import { useState } from "react";
import "./Call.css";
import Slide from "react-reveal/Slide";
import Modal from "../Modal/Modal";
import ModalСourse from "../Modal/ModalСourse";

const Call = ({ product }) => {
  const [registerModal, setRegisterModal] = useState(true);
  const [openModalСourse, setOpenModalСourse] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <a href="tel:+998998764444" className="phoneee">
        <div onClick={() => setOpenModalСourse(!openModalСourse)} className="ring">
          <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
            <div className="coccoc-alo-ph-circle"></div>
            <div className="coccoc-alo-ph-circle-fill"></div>
            <div className="coccoc-alo-ph-img-circle"></div>
          </div>
        </div>
      </a>

      {/* {openModal ? (
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
      ) : null} */}
    </>
  );
};

export default Call;
