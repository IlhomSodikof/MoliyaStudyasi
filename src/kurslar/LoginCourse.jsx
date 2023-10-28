import React from "react";

import { useSelector } from "react-redux";

import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";

import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";

const LoginCourse = () => {

    const course = useSelector(({ course }) => course.course);

    const { control, formState: { errors }, } = useFormContext();

    return (
        <div className="kurs_login">
            <Controller
                control={control}
                name="firstName"
                rules={{
                    required: "Ismni to'liq kiritish kerak",
                }}
                render={({ field }) => (
                    <TextField
                        className="ism"
                        id="first-name"
                        label=" Ism"
                        variant="outlined"
                        placeholder="Ismingizni kiriting"
                        fullWidth={true}
                        margin="normal"
                        {...field}
                        error={Boolean(errors.firstName)}
                        helperText={errors.firstName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="lastName"
                rules={{
                    required: "Telefon raqamni to'liq kiritish kerak",
                }}
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Telefon Raqamingiz"
                        variant="outlined"
                        placeholder="Telefon raqamni kiriting"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.lastName)}
                        helperText={errors.lastName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="nickName"
                rules={{
                    required: "Pasport seriasini to'liq kiritish kerak",
                }}
                render={({ field }) => (
                    <TextField
                        id="nick-name"
                        label="Pasport"
                        variant="outlined"
                        placeholder="Pasport seriasini kiriting"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.nickName)}
                        helperText={errors.nickName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="adressName"
                rules={{
                    required: "Manzil  to'liq kiritilish kerak",
                }}
                render={({ field }) => (
                    <TextField
                        id="adress-name"
                        label="Manzil"
                        variant="outlined"
                        placeholder="Vil, Tuman, Mahalla, Ko'cha, Uy"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.adressName)}
                        helperText={errors.adressName?.message}
                    />
                )}
            />
        </div>
    );
};
export default LoginCourse