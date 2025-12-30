import { createSlice } from "@reduxjs/toolkit";

// creating the slice (model)
const themeSlice = createSlice({
  name: "Toggle theme",
  initialState: "light", //default theme
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"), // defining the  state as function to handle large number of data
  },
});

export const { toggleTheme } = themeSlice.actions; // theme.actions is body of themeSlice function we take toggleTheme from toggleTheme
export default themeSlice.reducer; // This export function with reducer because it only give the  that function to store function reducer , It is reducer function for created by  createSlice
