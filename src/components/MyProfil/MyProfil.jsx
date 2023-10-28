import React from 'react'
import './MyProfil.css'
import {FaUser} from "react-icons/fa"
//////////////////////////////////////////////////

import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import {useState, useEffect} from "react"

import {
  ClockIcon,
  BagIcon,
  ArrowFill,
  OdinC,
  PlayToPlay,
} from "../../assets/svg/svg";
import Slide from "react-reveal/Slide";
import ModalСourse from "../Modal/ModalСourse";
import { API_URL} from "../../api/api";
import axios from 'axios';
////////////////////////


export default function MyProfile() {

    const users = useSelector(({ user }) => user);

    const [openModal, setOpenModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(true);
  
    const handleModal = () => {
      if (users?.isAuthenticated) {
        window.open("https://t.me/moliya_studiyasi", "_blank");
      } else {
        setOpenModal(!openModal);
      }
    };
  

    const[ver, setVer] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setVer(true)        
        }, 1500);
        return () => clearInterval(interval);
      }, []);


      useEffect(() => {
        const intervals = setInterval(() => {
          setVer(false) }, 3000);
        return () => clearInterval(intervals);
      }, []);


      const [product,setProduct] = useState([]);
      
      useEffect(() => {
        axios.get(`${API_URL}/account/user/contract/info/`) 
            //${API_URL}news/all
          .then((res) =>setProduct(res.data))
          // console.log("news:",res)
          .catch((err) => console.log(err));
          console.log(product);
      },[]);

  return (
    <>
    

<div class="container">
   <div class="row">
      <div class="col-md-2">
         <div id="content" class="content content-full-width">
            <div class="profile">
               <div class="profile-header">
                  <div class="profile-header-cover"></div>
                  <div class="profile-header-content">
                     <div class="profile-header-img" style={{marginBottom:"20px"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hn99qYRelxvoRqkCRUiVgxo8Kb2rjn3PLg&usqp=CAU" alt=""/>
                     </div>
                     <div class="profile-header-info">
                        <h4 class="m-t-10 m-b-5">Ilhom Sodikof</h4>
                        <p class="m-b-10">Tel:+998999797729</p>
                        <a href="#" class="btn btn-sm btn-info mb-2">Emile:ilhombek@gmail.com</a>
                     </div>
                  </div>
                
               </div>
            
            
            </div>
         </div>
      </div>
   </div>
</div>
<div className="container-profil" id="courses">
      <div className="card__section-profil">
        <Slide bottom cascade>
          <div className="cards__wrapper-profil">
            <div className="card-profil">
              <div className="card__overlay-profil"></div>
              <div className="icon__card-profil">
                <BagIcon />
              </div>
              <h3>Buxgalteriya kursi</h3>
              <p>
                Buxgalteriya nazariy va amaliy tarafdan o'rgatilib, darslar
                yuqori malakali ustozlar tomonidan o'rgatiladi.{" "}
              </p>
              <ul className="card__utils-profil">
                <li>
                  <ClockIcon />
                  <span>
                    Davomiyligi: <b>4-oy</b>
                  </span>
                </li>
                <li>
                  <ClockIcon />
                  <span>12-15 kishilik guruh</span>
                </li>
                <li>
                  <ClockIcon />
                  <span>0 dan balansgacha va 1C dasturi</span>
                </li>
              </ul>
              <Link className="button__hover-profil">   
              {/* onClick={handleModal} */}
                <Link><h4>Activ emas</h4></Link>
                
              </Link>
            </div>
            <div className="card-profil">
              <div className="card__overlay-profil"></div>
              <div className="icon__card-profil">
                <OdinC />
              </div>
              <h3>Buxgalteriya - Individual</h3>
              <p>
                Individual darslar o'quvchining bo'sh vaqtiga mos tarzda jadval
                asosida qo'yib beriladi.{" "}
              </p>
              <ul className="card__utils-profil">
                <li>
                  <ClockIcon />
                  <span>
                    Davomiyligi: <b>2-3-oy</b>
                  </span>
                </li>
                <li>
                  <ClockIcon />
                  <span>Yakka tartibda</span>
                </li>
                <li>
                  <ClockIcon />
                  <span>0 dan balansgacha va 1C dasturi</span>
                </li>
              </ul>
              <div  className="button__hover-profil">
              {/* onClick={handleModal} */}
              <Link><h4>Activ emas</h4></Link>
                
              </div>
            </div>
            <div className="card-profil" style={ver ? {bottom:"0",transition:"3s"}:{bottom:"80px",transition:"3s"}}>
              <div className="card__overlay-profil"></div>
              <div className="icon__card-profil">
                <PlayToPlay />
              </div>
              <h3>Buxgalteriya- Onlayn</h3>
              <p>Darslar ZOOM va ANY DESK dasturlari orqali olib boriladi. </p>
              <ul className="card__utils-profil">
                <li>
                  <ClockIcon />
                  <span>
                    Davomiyligi: <b>2-oy</b>
                  </span>
                </li>
                <li>
                  <ClockIcon />
                  <span>Yakka tartibda</span>
                </li>
                <li>
                  <ClockIcon />
                  <span>0 dan balansgacha va 1C dasturi</span>
                </li>
              </ul>
              <div  className="button__hover-profil">
              {/* onClick={handleModal} */}


<Link><h4>Active</h4></Link>
                
              </div>
            </div>
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
            

        
    </>
  )
}