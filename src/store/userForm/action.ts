import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSettlements = createAsyncThunk(
  "Settlements",
  async (value) => {
    const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: "d3d20120c5bffacad42718bafc6b5620",
        modelName: "Address",
        calledMethod: "getSettlements",
        methodProperties: {
          Page: "1",
          Warehouse: "1",
          FindByString: value,
          Limit: "20",
        },
      }),
    });
    const json = await response.json();
    return json;
  }
);

export const fetchWarehouse = createAsyncThunk("Warehouse", async (value) => {
  const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apiKey: "d3d20120c5bffacad42718bafc6b5620",
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: value,
        Language: "UA",
        TypeOfWarehouseRef: "9a68df70-0267-42a8-bb5c-37f427e36ee4",
      },
    }),
  });
  const json = await response.json();

  return json;
});
