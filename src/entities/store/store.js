import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "./reducers/tableSlice"

export const store = configureStore({
  reducer: {
    table: tableSlice,
  },
});
