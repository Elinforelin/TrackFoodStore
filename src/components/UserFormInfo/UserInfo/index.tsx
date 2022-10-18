import { FC } from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { TextField } from "@mui/material";

import classes from "./styles.module.scss";
import { UserFormInputs } from "../../../../pages/userForm";

export const UserInfo: FC<{
  errors: FieldErrorsImpl<UserFormInputs>;
  register: UseFormRegister<UserFormInputs>;
}> = ({ register, errors }) => {
  return (
    <div className={classes.arrangement}>
      <h3>Оформлення замовлення</h3>
      <TextField
        placeholder="Ім'я"
        {...register("firstName")}
        classes={{ root: classes.textFieldRoot }}
      />
      <p className={classes.paragraph}>{errors.firstName?.message}</p>
      <TextField
        classes={{ root: classes.textFieldRoot }}
        placeholder="Прізвище"
        {...register("lastName")}
      />
      <p className={classes.paragraph}>{errors.lastName?.message}</p>
      <TextField
        placeholder="Номер телефону"
        {...register("number")}
        classes={{ root: classes.textFieldRoot }}
      />
      <p className={classes.paragraph}>{errors.number?.message}</p>
    </div>
  );
};
