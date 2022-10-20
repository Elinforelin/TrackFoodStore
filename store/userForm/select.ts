import { RootStateType } from "../rootType";

export const selectSettlements = (state: RootStateType) =>
  state.settelments.settlementsList;
export const selectWarehouse = (state: RootStateType) =>
  state.settelments.warehousesList;
