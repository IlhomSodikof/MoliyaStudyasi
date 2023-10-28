import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../api/api";
import "../News/newscards.css";
import Loader from "../../components/Loader/Loader";

const Blogs = () => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);
    axios
      .get(`${API_URL}all/blog`)
      .then((res) => {
        setProduct(res.data);
        console.log(typeof res.data, "Saaaaa");
        setLoader(true);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(product, "POOOOOOOO");

  return (
    <div>
      <div className="news__page__wrapper">
        <div className="title__case">
          <h1>Bloglar</h1>
        </div>
        <div className="news__grid">
          {loader ? (
            <>
              {product?.reverse().map((item, index) => {
                return (
                  <div
                    className="card__new"
                    key={index}
                    onClick={() =>
                      window.open(item?.link, "_blank", "noopener,noreferrer")
                    }
                  >
                    <div className="card__picture">
                      <img
                        src={`https://api.moliyastudiyasi.uz/cover/${item?.cover}`}
                        alt=""
                      />
                    </div>
                    <div className="card__text">
                      <h1>{item?.name_uz}</h1>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
