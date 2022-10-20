import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DevTool } from "@hookform/devtools";

import classes from "../styles/userForm.module.scss";
import { UserInfo } from "../components/UserFormInfo/UserInfo";
import { DeliveryInfo } from "../components/UserFormInfo/DeliveryInfo";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const schema = object({
  firstName: string()
    .matches(
      /^[A-Za-z.!@?#"$%&:;() *+,/;\-=[\\\]^_{|}<>\u0400-\u04FF]*$/,
      "Для цього поля дозволені лише алфавіт"
    )
    .min(2, "Ім`я має містити не меньше 2 символів")
    .required("Це поле є обов`язковим"),
  lastName: string()
    .required("Це поле є обов`язковим")
    .matches(
      /^[A-Za-z.!@?#"$%&:;() *+,/;\-=[\\\]^_{|}<>\u0400-\u04FF]*$/,
      "Для цього поля дозволені лише алфавіт"
    )
    .min(2, "Прізвище має містити не меньше 2 символів"),
  number: number()
    .positive()
    .integer()
    .required("Це поле є обов`язковим")
    .typeError("Необхідно вказати номер"),
  settlement: object()
    .shape({
      label: string().required("Оберіть місто"),
      value: string().required("status is required"),
    })
    .nullable()
    .required("Оберіть місто"),
  warehouse: object()
    .shape({
      label: string().required("Оберіть відділення"),
      value: string().required("status is required"),
    })
    .nullable()
    .required("Оберіть відділення"),
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
    control,
    setValue,
  } = useForm<UserFormInputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { back } = useRouter();
  const router = useRouter();

  const onSubmit: SubmitHandler<UserFormInputs> = (data) => {
    router.push("/completedOrder");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div className={classes.HeaderNavigation}>
          <Button className={classes.arrowBackIcon} onClick={back}>
            <ArrowBackIcon />
          </Button>
          <h3>Оформлення замовлення</h3>
        </div>
        <UserInfo register={register} errors={errors} />
        <DeliveryInfo
          register={register}
          errors={errors}
          control={control}
          setValue={setValue}
        />
        <Button
          variant="contained"
          classes={{ root: classes.buttonRoot }}
          type="submit"
        >
          Оформити замовлення
        </Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default UserForm;
