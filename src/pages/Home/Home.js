import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSection from "../../components/CardSection/CardSection";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import OnlineClasses from "../../components/OnlineClasses/OnlineClasses";
import SliderWrapper from "../../components/SliderWrapper/SliderWrapper";
import LazySlider from "../../components/LazySlider/LazySlider";
import News from "../../components/News/News";
import Blogs from "../../components/Blogs/BLogs";
import Forma from "../../components/Forma/Forma";
import OurResults from "../../components/OurResults/OurResults";
import { API_URL } from "../../api/api";
import Call from "../../components/Call/Call";

const Home = () => {
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/results/`)
  //     .then(({ data }) => setProduct(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <HeaderSection product={product} />
      <CardSection />
      <OurResults product={product} />
      <SliderWrapper />
      <OnlineClasses />
      <LazySlider />
      <News />
      <Blogs />
      <Forma product={product} />
      <Call />
    </div>
  );
};

export default Home;
