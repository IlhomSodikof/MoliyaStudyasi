import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { API_URL } from "../../api/api";
import { setCourse } from "../../redux/reducers/course";
import {
  ArrowFill,
  ClockIcon
} from "../../assets/svg/svg";
import ModalСourse from "../Modal/ModalСourse";
import "./CardSection.css";

const CardSection = () => {
  const users = useSelector(({ user }) => user);
  const course = useSelector(({ course }) => course.course);
  const dispatch = useDispatch();



  const [openModal, setOpenModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(true);

  const handleModal = () => {
    if (users?.isAuthenticated) {
      window.open("https://t.me/moliya_studiyasi", "_blank");
    } else {
      setOpenModal(!openModal);
    }
  };

  const handleClick = (item) => {
    dispatch(setCourse(item))
  }


  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/mainapp/courses/`)
      //${API_URL}news/all
      .then((res) => setProduct(res.data))
      // console.log("newsавфқавқфа:",res)
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container" id="courses">
      <div className="card__section">
        <Slide bottom cascade>
          <div className="cards__wrapper" id="kurs">
            {product.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card__overlay"></div>
                  <div className="icon__card">
                    {/* <BagIcon /> */}
                    <img src={item.image} alt="image" />
                  </div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.description.substring(0, 100)}...
                    {/* Buxgalteriya nazariy va amaliy tarafdan o'rgatilib, darslar
                yuqori malakali ustozlar tomonidan o'rgatiladi.   */}
                  </p>
                  <ul className="card__utils">
                    <li>
                      <ClockIcon />
                      <span>
                        Davomiyligi: <b>{item.continuity}</b>
                      </span>
                    </li>
                    <li>
                      <ClockIcon />
                      <span>{item.number_of_people} kishilik guruh</span>
                    </li>
                    <li>
                      <ClockIcon />
                      <span>{item.course_program.substring(0, 50)}</span>
                      {/* 0 dan balansgacha va 1C dasturi    */}
                    </li>
                  </ul>
                  <div className="button__hover">
                    <Link onClick={() => handleClick(item)} to="/birinchi_kurs"><h4>Kursga yozilish</h4></Link>
                    <ArrowFill />
                  </div>
                </div>
              );
            })}

          </div>
        </Slide>
      </div>
      {openModal ? (
        <ModalСourse
          registerModal={registerModal}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ) : null}
    </div>
  );
};

export default CardSection;
