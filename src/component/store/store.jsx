import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./loginSlice/LoginSlice";


export const store = configureStore({
    reducer:{
        LoginSlice :LoginSlice,
    },
})