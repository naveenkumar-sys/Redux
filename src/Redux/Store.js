import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Features/themeSlice";

//reducer is like cashier in bank where we access that using the the data with tht help of cashier
export const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
