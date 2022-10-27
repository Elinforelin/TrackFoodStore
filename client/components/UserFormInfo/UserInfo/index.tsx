import { InputAdornment, TextField } from "@mui/material";
import { NextPage } from "next";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { UserFormInputs } from "../../../pages/userForm";

import classes from "./styles.module.scss";

export const UserInfo: NextPage<{
  errors: FieldErrorsImpl<UserFormInputs>;
  register: UseFormRegister<UserFormInputs>;
}> = ({ register, errors }) => {
  return (
    <div className={classes.arrangement}>
      <h4>Особиста інформація</h4>
      <TextField
        placeholder="Ім'я"
        {...register("firstName")}
        classes={{ root: classes.textFieldRoot }}
      />
      <p
        className={
          errors.firstName?.message
            ? classes.paragraph
            : `${classes.paragraph}${classes.paragraphHidden}`
        }
      >
        {errors.firstName?.message}
      </p>
      <TextField
        classes={{ root: classes.textFieldRoot }}
        placeholder="Прізвище"
        {...register("lastName")}
      />
      <p
        className={
          errors.lastName?.message
            ? classes.paragraph
            : `${classes.paragraph}${classes.paragraphHidden}`
        }
      >
        {errors.lastName?.message}
      </p>
      <TextField
        placeholder="Номер телефону"
        type="number"
        {...register("number")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">+380</InputAdornment>
          ),
        }}
        classes={{ root: classes.textFieldRoot }}
      />
      <p
        className={
          errors.number?.message
            ? classes.paragraph
            : `${classes.paragraph}${classes.paragraphHidden}`
        }
      >
        {errors.number?.message}
      </p>
      {/*<TextField*/}
      {/*    placeholder="Пошта"*/}
      {/*    type="email"*/}
      {/*    {...register("email")}*/}
      {/*    classes={{ root: classes.textFieldRoot }}*/}
      {/*/>*/}
      {/*<p*/}
      {/*    className={*/}
      {/*        errors.email?.message*/}
      {/*            ? classes.paragraph*/}
      {/*            : `${classes.paragraph}${classes.paragraphHidden}`*/}
      {/*    }*/}
      {/*>*/}
      {/*    {errors.email?.message}*/}
      {/*</p>*/}
    </div>
  );
};
