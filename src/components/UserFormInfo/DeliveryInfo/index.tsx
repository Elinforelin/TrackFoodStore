import Select from "react-select";
import { FC } from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

import classes from "./styles.module.scss";

import { customStyles } from "./customSelectStyle";
import { SelectItemType, UserFormInputs } from "../../../../pages/userForm";
import { useDeliveryInfo } from "./useDeliveryInfo";

export const DeliveryInfo: FC<{
  register: UseFormRegister<UserFormInputs>;
  errors: FieldErrorsImpl<UserFormInputs>;
}> = ({ register, errors }) => {
  const {
    onInputChangeSelect,
    updatedArrayCities,
    onChangeSelect,
    updatedArrayWarehouses,
  } = useDeliveryInfo();

  return (
    <div className={classes.delivery}>
      <h3>Доставка</h3>
      <Select
        placeholder="Оберіть місто"
        styles={customStyles}
        instanceId="long-value-select"
        onInputChange={onInputChangeSelect}
        options={updatedArrayCities}
        {...(register("settlement"),
        { onChange: (item) => onChangeSelect(item as SelectItemType) })}
      />
      <p className={classes.paragraph}>{errors.settlement?.label?.message}</p>
      <Select
        styles={customStyles}
        placeholder="Оберіть відділеня"
        instanceId="long-value-select"
        options={updatedArrayWarehouses}
        {...(register("warehouse"), { name: "warehouse" })}
      />
      <p className={classes.paragraph}>{errors.warehouse?.label?.message}</p>
    </div>
  );
};
