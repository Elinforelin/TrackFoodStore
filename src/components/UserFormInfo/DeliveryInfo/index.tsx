import Select from "react-select";
import { FC } from "react";
import {
  FieldErrorsImpl,
  UseFormRegister,
  Controller,
  Control,
  UseFormSetValue,
} from "react-hook-form";

import classes from "./styles.module.scss";

import { customStyles } from "./customSelectStyle";
import { SelectItemType, UserFormInputs } from "../../../../pages/userForm";
import { useDeliveryInfo } from "./useDeliveryInfo";

export const DeliveryInfo: FC<{
  register: UseFormRegister<UserFormInputs>;
  errors: FieldErrorsImpl<UserFormInputs>;
  control: Control<UserFormInputs>;
  setValue: UseFormSetValue<UserFormInputs>;
}> = ({ errors, control, setValue }) => {
  const {
    onInputChangeSelect,
    updatedArrayCities,
    onChangeSelect,
    updatedArrayWarehouses,
  } = useDeliveryInfo();

  return (
    <div className={classes.delivery}>
      <h4>Доставка</h4>

      <Controller
        name="settlement"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            isClearable
            styles={customStyles}
            options={updatedArrayCities}
            onInputChange={onInputChangeSelect}
            placeholder="Оберіть місто"
            onChange={(item) => {
              setValue("settlement", item as SelectItemType, {
                shouldDirty: true,
              });
              onChangeSelect(item as SelectItemType);
            }}
          />
        )}
      />

      <p
        className={
          errors.settlement?.label?.message
            ? classes.paragraph
            : `${classes.paragraph}${classes.paragraphHidden}`
        }
      >
        {errors.settlement?.label?.message}
      </p>

      <Controller
        name="warehouse"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            isClearable
            styles={customStyles}
            options={updatedArrayWarehouses}
            placeholder="Оберіть відділеня"
          />
        )}
      />

      <p
        className={
          errors.warehouse?.label?.message
            ? classes.paragraph
            : `${classes.paragraph}${classes.paragraphHidden}`
        }
      >
        {errors.warehouse?.label?.message}
      </p>
    </div>
  );
};
