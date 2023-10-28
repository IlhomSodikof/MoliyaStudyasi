import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { API_URL, img__URL } from "../../api/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlueArrow } from "../../assets/svg/svg";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
  const [product, setProduct] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
    ]
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/mainapp/blog/`)   //all/blog/50
      .then((res) => setProduct(res.data))  //
      .catch((err) => console.log(err));
  }, []);

  const startFromTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      <div className="container">
        <div className="news_slider_wrapper mt-5">
          <div className="news__title">
            <h1>Bloglar</h1>
            <Link to="/blogs" onClick={startFromTop}>
              {" "}
              <button className="see_all">
                Barchasini ko’rish <BlueArrow />{" "}
              </button>
            </Link>
          </div>
          <Slider {...settings}>
            {product.map((item) => {
              return (
                <div key={item.id}>
                  <div className="new__card">
                    <div className="new_card_img">
                      <a href='' target="_blank">
                        <img src={ item.images} alt="Salom" />
                      </a>
                    </div>
                    <div className="new_card_text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
