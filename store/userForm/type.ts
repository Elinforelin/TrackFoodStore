export type SettlementsState = {
  settlementsList: [];
  warehousesList: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  selectedSettlement: string;
  selectedWarehouse: string;
};
