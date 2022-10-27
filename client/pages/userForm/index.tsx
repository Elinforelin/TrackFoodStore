import { useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DevTool } from "@hookform/devtools";

import classes from "./userForm.module.scss";
import { UserInfo } from "../../components/UserFormInfo/UserInfo";
import { DeliveryInfo } from "../../components/UserFormInfo/DeliveryInfo";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectShoppingCart } from "../../store/shoppingCart/select";

export type SelectItemType = {
  value: string;
  label: string;
};

export interface UserFormInputs {
  firstName: string;
  lastName: string;
  number: number;
  settlement: SelectItemType;
  warehouse: SelectItemType;
}

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
  // email: string().email('Невірна пошта').required(),
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

const UserForm: NextPage = () => {
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
  const shoppingCart = useSelector(selectShoppingCart);
  const [userData, setUserData] = useState<UserData>();

  interface UserData {
    firstName: string;
    lastName: string;
    number: number;
    warehouse: string;
    settlement: string;
  }

  const onSubmit: SubmitHandler<UserFormInputs> = (data) => {
    setUserData({
      ...data,
      warehouse: data.warehouse.value,
      settlement: data.settlement.value,
    });
    router.push("/completedOrder");
  };

  const order = useMemo(() => {
    return shoppingCart.map((item) => {
      return {
        name: item.list[0].name,
        quantiti: item.list.length,
        addition: item.list[0].options
          ? {
              meat: item.list[0].options[0].enable,
              garlic: item.list[0].options[1].enable,
              spicy: item.list[0].options[2].enable,
            }
          : null,
      };
    });
  }, [shoppingCart]);

  useEffect(() => {
    const postData = async () => {
      const response = await fetch("http://localhost:3001/test", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ data: userData, order }),
      });
    };
    postData();
  }, [userData]);

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
