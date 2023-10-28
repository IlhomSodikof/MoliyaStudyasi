import React, {useEffect, useState} from "react"; 
import "../SliderWrapper/SliderWrapper.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Userimg from "../../assets/img/userimg.png";
import Slide from 'react-reveal/Slide'
// import { dataInfo } from "../../data/datainfo";
import axios from "axios";


const SliderWrapper = () => {
  const [product,setProduct] = useState([]);
  
  useEffect(() => {
    axios.get(`https://islombekorifov7777755555.pythonanywhere.com/mainapp/employee/`) 
        //${API_URL}news/all
      .then((res) =>setProduct(res.data))
      // console.log("news:",res)
      .catch((err) => console.log(err));
  },[]);
  
  
    const settings = {
        dots: true,
        infinite: true,
        loop:true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
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
  return (
    <div className="container" id="team">
      
     <div className="user_slider_wrapper">
     <h1>Bizning Jamoa</h1>
     <Slider {...settings}>
        {
          product?.reverse().map((item, index) => {
            return(
              <Slide top>
              <div key={index}>
              <div className="userSlider_card_full">
                <div className="userSlider_card_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="userSlider_card_text">
                  <h3>{item.first_name + item.last_name}</h3>
                  <p>{item.position}</p>
                </div>
              </div>
              </div>
              </Slide>
            )
          })
        }
     
      </Slider>
       
     </div>
    </div>
  );
};

export default SliderWrapper;
