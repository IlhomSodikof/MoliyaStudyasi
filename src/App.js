import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import MyProfile from "./components/MyProfil/MyProfil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import News from "./pages/News/News";
import Blogs from "./pages/Blogs/Blogs";
import { login } from "./redux/reducers/user";
import { API_URL_REG } from "./api/api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import BirinchiKurs from "./kurslar/BirnchiKurs"

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!localStorage.getItem("token")) {
      setLoading(false);
      return false;
    }
    axios
      .get(API_URL_REG + "account/user/data/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(({ data }) => {
        dispatch(login(data));
        setLoading(false);
        // toast.success("Success")
      })
      .catch(() => {
        localStorage.removeItem("token");
        setLoading(false);
        toast.error("Error");
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="main">
          <Toaster position="top-center" reverseOrder={false} />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/birinchi_kurs" element={<BirinchiKurs />} />
              <Route path="/myprofile" Component={MyProfile} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
