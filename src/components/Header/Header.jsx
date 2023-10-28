import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import "../Header/Header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/img/logo.svg";
import { ArrowRight } from "../../assets/svg/svg";
import Modal from "../Modal/Modal";
import { logout } from "../../redux/reducers/user";
import { BiSolidUserPin } from "react-icons/bi";

const Header = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ user }) => user);
  const location = useLocation();
  const navigate = useNavigate();

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(true);
  const modalRegister = () => {
    setOpenModal(!openModal);
    setRegisterModal(true);
  };
  const modalLogin = () => {
    setOpenModal(!openModal);
    setRegisterModal(false);
  };

  const navLink = [
    {
      text: "Kurslar",
      href: "courses",
    },
    {
      text: "Natijalar",
      href: "results",
    },
    {
      text: "Jamoa",
      href: "team",
    },
    {
      text: "Online darslar",
      href: "lessons",
    },
    {
      text: "Biz haqimizda",
      href: "aboutus",
    },
    {
      text: "Blog",
      href: "blog",
    },
  ];

  // const handleNawClick = (item) => {
  //   setNav(item);
  // };

  const expandNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const LogoutUser = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return (
    <div>
      <header
        style={{
          "--filter-var": "none",
        }}
      >
        <nav className="container" id="navbar">
          <NavLink to="/" className="logo">
            <img src={logo} alt="" />
          </NavLink>

          <ul className={isNavExpanded ? "menu expanded" : "menu"}>
            {navLink?.map((item, index) => (
              <li key={index}>
                <Link
                  activeClass="active"
                  to={item?.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    <>
                      {location?.pathname === "/"
                        ? {}
                        : navigate("/", { replace: true })}
                      {window.innerWidth < 768 ? expandNavbar() : null}
                    </>;
                  }}
                >
                  {item?.text}
                </Link>
              </li>
            ))}


          </ul>





          {isNavExpanded ? (
            <><div
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
              className="overlay__sidebar"
            ></div>
            </>
          ) : null}

          <div className="user__auth__btns">
            {users?.isAuthenticated ? (<div class="tooltip" style={{ backgroundColor: "transparent" }}>
              <NavLink className="linknav" style={{ backgroundColor: "transparent" }} to='/myprofile'><BiSolidUserPin className="userIcon" /></NavLink>
              <span class="tooltiptext">My profile</span>

            </div>) : ("")}
            {!users?.isAuthenticated ? (
              <button onClick={modalRegister} className="register__enter">
                Ro’yxatdan o’tish
              </button>
            ) : (
              <>
                <button className="register__enter" onClick={LogoutUser}>
                  Chiqish
                </button></>
            )}

            {!users?.isAuthenticated ? (
              <button onClick={modalLogin} className="login__enter">
                Kirish <ArrowRight />
              </button>
            ) : (
              <button className="login__enter">
                {users?.user?.name} <ArrowRight />
              </button>

            )}
            {openModal ? (
              <Modal
                registerModal={registerModal}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ) : null}
          </div>

          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* icon from Heroicons.com */}
            {!isNavExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>




        </nav>
      </header>
    </div>
  );
};

export default Header;