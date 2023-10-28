import React, {useState, useEffect} from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import girl from "../../assets/img/girl.png";
import { BagGreen } from "../../assets/svg/svg";
// import Slide from "react-reveal/Slide";
import "./OurResults.css";
import { API_URL} from "../../api/api";

const OurResults = () => {
  
  
  
  
  const [product,setProduct] = useState([]);
  
  useEffect(() => {
    axios.get(`${API_URL}/mainapp/result`) 
        //${API_URL}news/all
      .then((res) =>setProduct(res.data))
      // console.log("news:",res)
      .catch((err) => console.log(err));
  },[]);
  
  
  
  
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 1500,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };

  // console.log(products," sssosoosso");

  return (
    <div id="results">
      <div className="our__results__wrapper">
        <div className="result__box">
          <div className="result__section">
            <div className="result__text">
              <h2>
                So’z <br /> isboti bilan
              </h2>
              <h3>Bizning natijalar</h3>
            </div>
            <div className="result__slider">
              <div className="shadow__blue"></div>
              <Slider className="res_class" {...settings}>
                {product.reverse().map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="result__card">
                        <div className="result__img">
                          <a href={item?.link} target="_blank">
                            <img src={ item.image} alt="image" />
                          </a>
                        </div>
                        <div className="result__titles">
                          <h2>{item.name + item.last_name}</h2>
                          <div className="work_onoff">
                            <BagGreen />
                            <p>Ish bilan ta’minlangan</p>
                          </div>
                          <div className="hide__text">
                            {/* <p>{item?.comment_uz}</p> */}
                            <p>
                            Mashg'ulotlarni muvaffaqiyatli o'zlashtirib,
                          imtihonlarni a'lo bahoga topshirdi. Natijada o'quv
                          markazimiz va'dasiga binoan Sardorni ish bilan
                          ta'minladi. Hozirda u buxgalter sifatida mustaqil
                          faoliyat olib bormoqda.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* <div>
                  <div className="result__card">
                    <div className="result__img">
                      <img src={girl} alt="" />
                    </div>
                    <div className="result__titles">
                      <h2>Avazov Sardorbek</h2>
                      <div className="work_onoff">
                        <BagGreen />
                        <p>Ish bilan ta’minlangan</p>
                      </div>
                      <div className="hide__text">
                        <p>
                          Mashg'ulotlarni muvaffaqiyatli o'zlashtirib,
                          imtihonlarni a'lo bahoga topshirdi. Natijada o'quv
                          markazimiz va'dasiga binoan Sardorni ish bilan
                          ta'minladi. Hozirda u buxgalter sifatida mustaqil
                          faoliyat olib bormoqda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="result__card">
                    <div className="result__img">
                      <img src={girl} alt="" />
                    </div>
                    <div className="result__titles">
                      <h2>Avazov Sardorbek</h2>
                      <div className="work_onoff">
                        <BagGreen />
                        <p>Ish bilan ta’minlangan</p>
                      </div>
                      <div className="hide__text">
                        <p>
                          Mashg'ulotlarni muvaffaqiyatli o'zlashtirib,
                          imtihonlarni a'lo bahoga topshirdi. Natijada o'quv
                          markazimiz va'dasiga binoan Sardorni ish bilan
                          ta'minladi. Hozirda u buxgalter sifatida mustaqil
                          faoliyat olib bormoqda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="result__card">
                    <div className="result__img">
                      <img src={girl} alt="" />
                    </div>
                    <div className="result__titles">
                      <h2>Avazov Sardorbek</h2>
                      <div className="work_onoff">
                        <BagGreen />
                        <p>Ish bilan ta’minlangan</p>
                      </div>
                      <div className="hide__text">
                        <p>
                          Mashg'ulotlarni muvaffaqiyatli o'zlashtirib,
                          imtihonlarni a'lo bahoga topshirdi. Natijada o'quv
                          markazimiz va'dasiga binoan Sardorni ish bilan
                          ta'minladi. Hozirda u buxgalter sifatida mustaqil
                          faoliyat olib bormoqda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="result__card">
                    <div className="result__img">
                      <img src={girl} alt="" />
                    </div>
                    <div className="result__titles">
                      <h2>Avazov Sardorbek</h2>
                      <div className="work_onoff">
                        <BagGreen />
                        <p>Ish bilan ta’minlangan</p>
                      </div>
                      <div className="hide__text">
                        <p>
                          Mashg'ulotlarni muvaffaqiyatli o'zlashtirib,
                          imtihonlarni a'lo bahoga topshirdi. Natijada o'quv
                          markazimiz va'dasiga binoan Sardorni ish bilan
                          ta'minladi. Hozirda u buxgalter sifatida mustaqil
                          faoliyat olib bormoqda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="result__card">
                    <div className="result__img">
                      <img src={girl} alt="" />
                    </div>
                    <div className="result__titles">
                      <h2>Avazov Sardorbek</h2>
                      <div className="work_onoff">
                        <BagGreen />
                        <p>Ish bilan ta’minlangan</p>
                      </div>
                      <div className="hide__text">
                        <p>
                          Mashg'ulotlarni muvaffaqiyatli o'zlashtirib,
                          imtihonlarni a'lo bahoga topshirdi. Natijada o'quv
                          markazimiz va'dasiga binoan Sardorni ish bilan
                          ta'minladi. Hozirda u buxgalter sifatida mustaqil
                          faoliyat olib bormoqda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="result__card">
                    <div className="result__img">
                      <img src={girl} alt="" />
                    </div>
                    <div className="result__titles">
                      <h2>Avazov Sardorbek</h2>
                      <div className="work_onoff">
                        <BagGreen />
                        <p>Ish bilan ta’minlangan</p>
                      </div>
                      <div className="hide__text">
                        <p>
                          Mashg'ulotlarni muvaffaqiyatli o'zlashtirib,
                          imtihonlarni a'lo bahoga topshirdi. Natijada o'quv
                          markazimiz va'dasiga binoan Sardorni ish bilan
                          ta'minladi. Hozirda u buxgalter sifatida mustaqil
                          faoliyat olib bormoqda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurResults;
