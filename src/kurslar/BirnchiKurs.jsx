import React, { useState } from "react";
import axios from "axios";
import "./BirinchiKurs.css"
import LoginCourse from "./LoginCourse";
import Shartnoma from './Shartnoma.jsx';
import PaymentForm from "./PaymentForm";
import { httpRequest } from "../utils/request";
import { API_URL } from "../api/api";
// import { axiosNewInstance } from "../api/api";

import { useSelector } from "react-redux";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Ro'yhatdan O'tish",
    "Shartnoma bilan tanishish",
    "To'lovni amalga oshirish",
  ];
}




const LinearStepper = () => {
  const [isCheckboxAvailable, setIsCheckboxAvailable] = useState(true);
  const [isCantract,setCantract] = useState(false);

  const course = useSelector(({ course }) => course.course);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <LoginCourse />;
      case 1:
        return <Shartnoma isCantract={isCantract} setIsCheckboxAvailable={setIsCheckboxAvailable} isCheckboxAvailable={isCheckboxAvailable} />;
      case 2:
        return <PaymentForm />;
      default:
        return "unknown step";
    }
  }


  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  // error function
  const isStepFailed = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  }

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (item) => {
    // console.log('data', item)
    // console.log('data ifd', course)
    setCantract(course)

    if (activeStep === 0) {

      // try{ 
      //   const creat = axiosNewInstance.post(`/mainapp/step/${course.id}`);

      //   }catch(e){
      //     console.log('error', e.massage);

      //   }
      // }
      // const token = localStorage.getItem("access_token")
      // console.log("token", token)

      httpRequest({
        method: 'post',
        url: `${API_URL}/mainapp/step/${course.id}/`,

        data: {
          first_name: item.firstName,
          passport: item.nickName,
          phone: item.lastName,
          address: item.adressName
        },

      }).then((res) => {
        // hammasi ok bogandagi holat
        console.log("step1", res);
        setActiveStep(activeStep + 1);
      }).catch((err) => {
        console.log(err);
      })


      setActiveStep(activeStep + 1);
    }; if (activeStep === 1) {
      httpRequest({
        method: 'put',
        url: `${API_URL}/mainapp/steptwo/${course.id}/`,
        data: {
          offerta_agreement: true,
        }
      }).then((res) => {
        // hammasi ok bogandagi holat
        console.log("checbox", res);
        setActiveStep(activeStep + 1);
      }).catch((err) => {
        console.log(err);
      })
      setActiveStep(activeStep + 1);
    }
    // if (activeStep == steps.length - 1) {
    //   fetch("https://jsonplaceholder.typicode.com/comments")
    //     .then((data) => data.json())
    //     .then((res) => {
    //       console.log(res);
    //       setActiveStep(activeStep + 1);
    //     });
    // } else {
    //   setActiveStep(activeStep + 1);
    //   setSkippedSteps(
    //     skippedSteps.filter((skipItem) => skipItem !== activeStep)
    //   );
    // }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                majburiy
              </Typography>
            );
          }
          // error
          if (isStepFailed() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step style={{ marginTop: "7rem" }} {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography style={{ marginBottom: '25rem' }} variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button style={{ marginLeft: '15rem', marginBottom: '5rem', marginTop: '2rem' }}
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )} */}
              <Button style={{ marginTop: '-3rem' }}
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
                disabled={activeStep == 1 && isCheckboxAvailable}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinearStepper;

