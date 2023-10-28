import React from "react";
import post1 from "../../assets/img/anime/post1.png";
import post2 from "../../assets/img/anime/post2.png";
import post3 from "../../assets/img/anime/post3.png";
import Marquee from "react-fast-marquee";
import "./LazySlider.css";
import Fade from "react-reveal/Fade";

import pos1 from "../../assets/img/slider/photo1.jpg";
import pos2 from "../../assets/img/slider/photo2.jpg";
import pos3 from "../../assets/img/slider/photo3.jpg";
import pos4 from "../../assets/img/slider/photo4.jpg";
import pos5 from "../../assets/img/slider/photo5.jpg";
import pos6 from "../../assets/img/slider/photo6.jpg";
import pos7 from "../../assets/img/slider/photo7.jpg";
import pos8 from "../../assets/img/slider/photo8.jpg";
import pos9 from "../../assets/img/slider/photo9.jpg";
import pos10 from "../../assets/img/slider/photo10.jpg";

const IMAGE_ARRAY_SLIDER = [
  pos1,
  pos2,
  pos3,
  pos4,
  pos5,
  pos6,
  pos7,
  pos8,
  pos9,
  pos10,
  post1,
  post2,
  post3,
];

function Shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const LazySlider = () => {
  return (
    <div>
      <div className="info__lazy container" id="aboutus">
        <div className="text_lazy">
          <Fade left>
            <h1>
              Moliya Studiyasi? <span>biz haqimizda...</span>
            </h1>
          </Fade>
          <Fade right>
            <p>
              Moliya Studiyasi - O'zbekistondagi eng katta va sifatli
              buxgalteriya ta'lim muassasasi. 10 yildan uzoq bo'lgan muddat
              davomida buxgalteriya sohasini o'rgatib, sohada yuqori malakali
              kadrlarni yetishtirib kelmoqda. Shu kunga qadar 1 000 dan ortiq
              o'quvchiga ta'lim bergan va kursni muvaffaqiyatni yakunlaganlarni
              ish bilan ta'minlab kelmoqda
            </p>
          </Fade>
        </div>
      </div>
      <div className="lazy">
        <Marquee pauseOnHover>
          {IMAGE_ARRAY_SLIDER.reverse().map((item, i) => (
            <div className="item__slide" key={i}>
              <img src={item} alt="" />
            </div>
          ))}
        </Marquee>

        <Marquee pauseOnHover direction="right">
          {Shuffle(IMAGE_ARRAY_SLIDER).map((item, i) => (
            <div className="item__slide" key={i}>
              <img src={item} alt="" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LazySlider;
