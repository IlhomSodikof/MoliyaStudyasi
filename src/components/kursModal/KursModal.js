import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BiLoaderAlt } from "react-icons/bi";
import { login } from "../../redux/reducers/user";
import { API_URL_REG } from "../../api/api";
import "./KursModal.css";

const KursModal = ({ handleModal }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(false);
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

  const Login = () => {
    setIsloading(true);
    const dataFormLogin = {
      phone: userLogin.phone,
      password: userLogin.password,
      password_confirmation: userLogin.password,
    };

    axios
      .post(`${API_URL_REG}login`, dataFormLogin)
      .then(({ data }) => {
        setIsloading(false);
        localStorage.setItem("token", data?.token);
        dispatch(login(data?.user));
        handleModal();
      })
      .catch((err) => {
        setIsloading(false);
        console.log("err", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="kursmodal">
      <div className="kursmodal__wrapper">
        <p>Kursga yozilish uchun</p>
        <h1>Formani to’ldiring</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="phone"
            maxLength={12}
            onChange={inputHandleLogin}
            placeholder="Telefon raqam"
            required
          />
          <input
            name="password"
            type="password"
            onChange={inputHandleLogin}
            placeholder="Yangi parol kiriting"
            required
          />
          <button type="submit" onClick={Login}>
            {isLoading ? (
              <BiLoaderAlt className="loaderIcon kursModalLoader" />
            ) : (
              "Yuborish"
            )}
          </button>
        </form>
      </div>
      <div className="overlayModal" onClick={handleModal}></div>
    </div>
  );
};

export default KursModal;
