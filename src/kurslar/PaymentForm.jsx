import axios from "axios";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoMdCloudUpload } from "react-icons/io";

const PaymentForm = () => {
    const { control } = useFormContext();

    // upload start
    const [image, setImage] = useState("");
    const [bar, setBar] = useState(0);

    const handleFile = (event) => {
        const file = event.target.files[0];

        const fomrdata = new FormData();
        setImage(URL.createObjectURL(file))
        fomrdata.append('file', file);
        axios.post('url', fomrdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: event => {
                setBar(Math.round(100 * event.loaded) / event.total)
            }
        }).then(res => setImage(URL.createObjectURL(file)))
            .catch(err => console.log(err));
    }
    // upload end
    return (
        <>
            <div className="payment-container">
                <div className="payment-video">
                    <h2 className="video">To'lov qilishdan oldin ushbu video <br /> qo'llanmadan foydalaning!</h2>
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/H_0HcFJjIDk?si=t-5IVjD74bAE1pDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="vl"></div>


                {/*  file upload */}
                <div className="payment_choost">
                    <h2 className="choose">To'lovni amalga oshirib bo'lgach chekni <br /> shu yerga yuklang!</h2>
                    <div className="upload">
                        <div className="input">
                            <input type="file" id="file" onChange={handleFile} />
                            <label for="file"><IoMdCloudUpload style={{ fontSize: "50px" }} /></label>

                            <br /> <br />
                            <div className="bar">

                            </div>
                        </div>
                        <br />
                        {
                            image &&
                            <img src={image} style={{ width: '15rem', height: '25rem', marginLeft: '2rem', marginLeft: "3rem", objectFit: "contain" }} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentForm;