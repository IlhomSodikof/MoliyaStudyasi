import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Forma.css";

const Forma = ({ product }) => {
  // const [inputVal, setInputVal] = useState("");

  const onSubmit = (data) => {
    data.preventDefault();
    const values = data.target;
    // console.log(values.first_name.value);
    if (!product?.bt?.t) return toast.error("Error telegram");
    if (!values.first_name.value || !values.phone_number.value) {
      return toast.error("Xabarnomani to'ldiring");
    }
    let botMessege = `
    moliyastudiyasi.uz 🎯%0A
      Ismi: ${values.first_name.value}%0A
      Nomeri: ${values.phone_number.value}%0A
    `;
    axios({
      method: "get",
      url: `https://api.telegram.org/bot${product?.bt?.t}/sendMessage?chat_id=${product?.bt?.t_id}&text=${botMessege}&parse_mode=HTML`,
    }).then(({ data }) => {
      if (data?.ok) {
        values.first_name.value = "";
        values.phone_number.value = "";
        toast.success("Xabar yuborildi");
      }
      if (!data?.ok) {
        toast.error("Xabar yuborilmadi");
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="forma__part">
          <div className="text__form">
            <h2>Kursga ro'yxatdan o'tish boshlandi</h2>
            <p>
              So'rov qoldiring va bizning mutaxassislarimiz siz bilan bog'lanadi
              va barcha savollaringizga javob beradi va sizni treningga
              ro'yxatdan o'tkazing
            </p>
          </div>
          <form onSubmit={onSubmit} className="form">
            <input type="text" placeholder="Ismingiz" name="first_name" />
            <input
              maxLength={12}
              // type="number"
              name="phone_number"
              placeholder="Telefon raqamingiz"
            />
            <input type="submit" value="Yuborish" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forma;
