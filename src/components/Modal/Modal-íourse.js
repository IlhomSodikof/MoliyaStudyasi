import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";
import toast from "react-hot-toast";

const Modal = ({ product, setOpenModal, openModal }) => {
  const [isLoading, setIsloading] = useState(false);
  const [userLogin, setUserLogin] = useState({
    name: "",
    phone: "",
  });

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  const inputHandleLogin = (e) => {
    setUserLogin(() => ({
      ...userLogin,
      [e.target.name]: e.target.value,
    }));
  };


  const onSubmit = (data) => {
    data.preventDefault();
    const values = data.target;
    // console.log(values.first_name.value);
    if (!product?.bt?.t) return toast.error("Error telegram");
    if (!values.first_name.value || !values.phone_number.value) {
      return toast.error("Xabarnomani to'ldiring");
    }
    let botMessege = `
    moliyastudiyasi.uz 🎯%0A
      Ismi: ${values.first_name.value}%0A
      Nomeri: ${values.phone_number.value}%0A
    `;
    axios({
      method: "get",
      url: `https://api.telegram.org/bot${product?.bt?.t}/sendMessage?chat_id=${product?.bt?.t_id}&text=${botMessege}&parse_mode=HTML`,
    }).then(({ data }) => {
      if (data?.ok) {
        values.first_name.value = "";
        values.phone_number.value = "";
        toast.success("Xabar yuborildi");
      }
      if (!data?.ok) {
        toast.error("Xabar yuborilmadi");
      }
    });
  };



  

  return (
    <div>
      <div className="modal">
        <div className="modal__overlay" onClick={closeModal}></div>
        <div className="modal__body">
          <p>Kursga yozilish uchun</p>
          <h1>Formani to’ldiring</h1>
          <form onSubmit={onSubmit}>
            <input
              name="first_name"
              type="text"
              onChange={inputHandleLogin}
              placeholder="Ismingiz"
              required
            />
            <input
               name="phone_number"
              required
              maxLength={12}
              onChange={inputHandleLogin}
              placeholder="Telefon raqam"
            />
            <button type="submit" className="register__btn">
              {isLoading ? <BiLoaderAlt className="loaderIcon" /> : "Yuborish"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
