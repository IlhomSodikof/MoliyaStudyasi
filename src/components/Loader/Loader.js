import React from "react";
import loader from "../../assets/img/loading.svg";
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
        <img className="loader__img" src={loader} alt="" />
    </div>
  )
};

export default Loader;
