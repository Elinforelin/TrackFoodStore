import { createSlice } from "@reduxjs/toolkit";
import { fetchSettlements, fetchWarehouse } from "./action";
import { SettlementsState } from "./type";

const initialState: SettlementsState = {
  settlementsList: [],
  warehousesList: [],
  loading: "idle",
  selectedSettlement: "",
  selectedWarehouse: "",
};

const settlementsSlice = createSlice({
  name: "settlements",
  initialState,
  reducers: {
    setSelectedSettlement: (state, action) => {
      state.selectedSettlement = action.payload;
    },
    setSelectedWarehouse: (state, action) => {
      state.selectedWarehouse = action.payload;
    },
    cleandWarehousesList: (state) => {
      state.warehousesList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSettlements.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchSettlements.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.settlementsList = action.payload.data;
      state.warehousesList = [];
    });
    builder.addCase(fetchSettlements.rejected, (state) => {
      state.loading = "failed";
    });
    builder.addCase(fetchWarehouse.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchWarehouse.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.warehousesList = action.payload.data;
    });
    builder.addCase(fetchWarehouse.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const {
  setSelectedSettlement,
  setSelectedWarehouse,
  cleandWarehousesList,
} = settlementsSlice.actions;

export default settlementsSlice.reducer;
