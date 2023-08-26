import { configureStore } from "@reduxjs/toolkit";
import laptopSlice from "./reducers/laptopSlice";
import cartSlice from "./reducers/cartSlice";

const store = configureStore({
    reducer:{
        laptopSlice,
        cartSlice
    }
})

export default store