import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Features/themeSlice";

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`flex justify-center items-center w-full h-screen ${
        theme == "light" ? "bg-black" : "bg-white"
      }`}
    >
      <button
        className="cursor-pointer px-2 py-1 rounded-lg hover:scale-x-95 bg-amber-300 text-yellow-900"
        onClick={handleClick}
      >
        Change to {theme == "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Theme;
