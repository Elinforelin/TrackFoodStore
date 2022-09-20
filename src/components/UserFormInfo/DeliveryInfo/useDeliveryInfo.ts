import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSettlements,
  fetchWarehouse,
} from "../../../store/userForm/action";
import {
  selectSettlements,
  selectWarehouse,
} from "../../../store/userForm/select";
import { setSelectedSettlement } from "../../../store/userForm/reducer";
import { SelectItemType } from "../../../../pages/userForm";

type ItemType = {
  Description: string;
  AreaDescription?: string;
};

export const useDeliveryInfo = () => {
  const dispatch = useDispatch() as any;
  const settlements = useSelector(selectSettlements);
  const warehouses = useSelector(selectWarehouse);
  const [onChangeValueSettlements, setOnChangeValueSettlements] = useState("");

  const onInputChangeSelect = (value: string) => {
    setOnChangeValueSettlements(value);
  };

  const onChangeSelect = (item: SelectItemType) => {
    setSelectedSettlement(item.value);
    dispatch(fetchWarehouse(item.value));
  };
  useEffect(() => {
    dispatch(fetchSettlements(onChangeValueSettlements));
  }, [onChangeValueSettlements, dispatch]);

  const updatedArrayCities = useMemo(() => {
    return settlements?.map((item: ItemType) => {
      return {
        value: item.Description,
        label: `${item.Description}, ${item.AreaDescription}`,
      };
    });
  }, [settlements]);

  const updatedArrayWarehouses = useMemo(() => {
    return warehouses?.map((item: ItemType) => {
      return {
        value: item.Description,
        label: item.Description,
      };
    });
  }, [warehouses]);

  return {
    onInputChangeSelect,
    onChangeSelect,
    updatedArrayCities,
    updatedArrayWarehouses,
  };
};
