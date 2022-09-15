import { FC, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import classes from "../styles/userForm.module.scss";

import { UserInfo } from "../src/components/UserFormInfo/UserInfo";
import { DeliveryInfo } from "../src/components/UserFormInfo/DeliveryInfo";
import { Button } from "@mui/material";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const schema = object({
  firstName: string()
    .matches(
      /^[A-Za-z.!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]*$/,
      "Для цього поля дозволені лише алфавіт"
    )
    .min(2, "Ім`я має містити не меньше 2 символів")
    .required("Це поле є обов`язковим"),
  lastName: string()
    .required("Це поле є обов`язковим")
    .matches(
      /^[A-Za-z.!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]*$/,
      "Для цього поля дозволені лише алфавіт"
    )
    .min(2, "Прізвище має містити не меньше 2 символів"),
  number: string()
    .matches(phoneRegExp, "Недійсний номер телефону")
    .required("Це поле є обов`язковим"),
  settlement: object().shape({
    value: string().required("Це поле є обов`язковим"),
    label: string().required(),
  }),
  warehouse: object().shape({
    value: string().required("Це поле є обов`язковим"),
    label: string().required(),
  }),
});

export type SelectItemType = {
  value: string;
  label: string;
};

export interface UserFormInputs {
  firstName: string;
  lastName: string;
  number: string;
  settlement: SelectItemType;
  warehouse: SelectItemType;
}

const UserForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<UserFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <UserInfo register={register} errors={errors} />
      <DeliveryInfo register={register} errors={errors} />
      <Button
        variant="contained"
        classes={{ root: classes.buttonRoot }}
        type="submit"
      >
        Оформити замовлення
      </Button>
    </form>
  );
};

export default UserForm;
