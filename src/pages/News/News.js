// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { API_URL } from "../../api/api";
// import new1 from "../../assets/img/anime/new1.png";
// import "./newscards.css";
// import Loader from "../../components/Loader/Loader";

// const News = () => {
//   const [product, setProduct] = useState([]);
//   const [loader, setLoader] = useState(false);

//   useEffect(() => {
//     setLoader(false);
//     axios
//       .get(`${API_URL}news/all`)
//       .then((res) => {
//         setProduct(res.data);
//         setLoader(true);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <div className="news__page__wrapper">
//         <div className="title__case">
//           <h1>Yangiliklar</h1>
//         </div>
//         <div className="news__grid">
//           {loader ? (
//             <>
//               {product?.reverse().map((item, index) => {
//                 return (
//                   <div
//                     className="card__new"
//                     key={index}
//                     onClick={() =>
//                       window.open(item?.link, "_blank", "noopener,noreferrer")
//                     }
//                   >
//                     <div className="card__picture">
//                       <img
//                         src={`https://api.moliyastudiyasi.uz/cover/${item?.cover}`}
//                         alt=""
//                       />
//                     </div>
//                     <div className="card__text">
//                       <h1>{item?.title_uz}</h1>
//                     </div>
//                   </div>
//                 );
//               })}
//             </>
//           ) : (
//             <Loader />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;
