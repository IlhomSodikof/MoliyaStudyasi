import React from "react";
import { useForm } from "react-hook-form";
import { Document } from 'react-pdf';
const Shartnoma = ({ setIsCheckboxAvailable, isCheckboxAvailable, isCantract }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    console.log("watchsssssssss",isCantract);
    const toggleCheckbox = () => {
        setIsCheckboxAvailable(!isCheckboxAvailable)
    }
 

    const onSubmit = data => alert(JSON.stringify(data));
    return (

<>
            <div className="shartlar-container">
                <div className="shartlar">
                <iframe src={isCantract.offer} width="100%" height="1000px" />
                    <div className="checbox" >
                        <form onSubmit={handleSubmit(onSubmit)}>


                                <input style={{display:"inline-block", position:"relative", top:"3px",right:"8px"}}
                                    type="checkbox"
                                    // value='yes'
                                    {...register("agreement", { required: 'Agreement is required' })}
                                    onChange={toggleCheckbox}
                                />
                            <label htmlFor="" >Shartnoma shartlariga roziman</label>
                        
                                
                            
                            <div>
                                {errors.agreement && <span>{errors.agreement.message}</span>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shartnoma