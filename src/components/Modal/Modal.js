import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Modal.css";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { API_URL_REG } from "../../api/api";
import { API_URL_LOGIN } from "../../api/api";

import { login } from "../../redux/reducers/user";
import { BiLoaderAlt } from "react-icons/bi";
import toast from "react-hot-toast";

const Modal = ({ registerModal, setOpenModal, openModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [stepLogin, setStepLogin] = useState(1);

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [userLogin, setUserLogin] = useState({
    name: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  const inputHandle = (e) => {
    setUser(() => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
    // console.log("---++++-----", e.target.value);
  };

  const inputHandleLogin = (e) => {
    setUserLogin(() => ({
      ...userLogin,
      [e.target.name]: e.target.value,
    }));
  };

  const register = () => {
    const dataForm = {
      first_name: user.name, // mana bu yerda ekan muammo
      phone: user.phone,
      password: user.password,
      password2: user.password,
    };
    setIsLoading(true);
    axios
      .post(`${API_URL_REG}account/register/`, dataForm)   //register olib tashlash kerak edi 
      .then(({ data }) => {
        setIsLoading(false);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        dispatch(login(data?.user));
        closeModal();
        toast.success("Muvaffaqiyatli kirdingiz !");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Xatolik yuz berdi!");
      });
  };

  const Login = () => {
    setIsLoading(true);
    const dataFormLogin = {
      phone: userLogin.phone,
      password: userLogin.password,
    };

    axios
      .post(`${API_URL_LOGIN}account/login/`, dataFormLogin)
      .then(({ data }) => {
        setIsLoading(false);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        dispatch(login(data?.user));
        closeModal();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err);
        toast.error("Xatolik yuz berdi!");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const stepPage = (num) => {
    setStepLogin(num);
    console.log("====================================");
    console.log(num);
    console.log("====================================");
  };

  return (
    <div>
      <div className="modal">
        <div className="modal__overlay" onClick={closeModal}></div>
        {registerModal ? (
          <div className="modal__body">
            {/* <AiOutlineClose onClick={closeModal} /> */}
            <p>Ma’lumotlardan to’liq foydalanish uchun</p>
            <h1>Ro’yxatdan o’ting</h1>
            <form action="#" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                onChange={inputHandle}
                placeholder="Ismingiz"
                required
              />
              <input
                name="phone"
                required
                maxLength={13}
                onChange={inputHandle}
                placeholder="Telefon raqam"
              />
              <input
                name="password"
                type="password"
                required
                onChange={inputHandle}
                placeholder="Yangi parol kiriting"
              />
              <button className="register__btn" onClick={register}>
                {isLoading ? (
                  <BiLoaderAlt className="loaderIcon" />
                ) : (
                  "Ro’yxatdan o’tish"
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="modal__body">
            {/* <AiOutlineClose onClick={closeModal} /> */}
            <p>Ma’lumotlardan to’liq foydalanish uchun</p>
            <h4>Formani to'ldiring</h4>
            <h1>Kirish</h1>
            <form action="#" onSubmit={handleSubmit}>
              {stepLogin === 1 ? (
                <>
                  <input
                    name="phone"
                    maxLength={13}
                    onChange={inputHandleLogin}
                    placeholder="Telefon raqam"
                    required
                  />
                  <input
                    name="password"
                    type="password"
                    onChange={inputHandleLogin}
                    placeholder="Parol kiriting"
                    required
                  />
                </>
              ) : stepLogin === 2 ? (
                <input
                  name="phone_reset"
                  maxLength={13}
                  onChange={inputHandleLogin}
                  placeholder="Telefon raqam"
                  required
                />
              ) : stepLogin === 3 ? (
                <>
                  <input
                    name="code"
                    maxLength={13}
                    onChange={inputHandleLogin}
                    placeholder="SMS kodni kiriting"
                    required
                  />
                  <input
                    name="password_new"
                    type="password"
                    onChange={inputHandleLogin}
                    placeholder="Yangi Parol kiriting"
                    required
                  />
                </>
              ) : (
                ""
              )}

              <div
                style={{
                  color: "#376cbb",
                  marginRight: "-190px",
                  marginBottom: "10px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {stepLogin === 1 ? (
                  <div onClick={() => stepPage(2)}>Parolni unutdingizmi?</div>
                ) : (
                  <div
                    onClick={() =>
                      stepPage(stepLogin === 2 ? 1 : stepLogin === 3 ? 2 : 1)
                    }
                  >
                    Ortga qaytish
                  </div>
                )}
              </div>
              <button onClick={Login} className="login__btn">
                {isLoading ? (
                  <BiLoaderAlt className="loaderIcon" />
                ) : stepLogin === 1 ? (
                  "Kirish"
                ) : (
                  "Tasdiqlash"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
