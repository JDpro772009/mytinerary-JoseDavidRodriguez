import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice.js"
import authReducer from "./reducer/authReducer.js";
import signUpReducer from "./reducer/signUpReducer.js";


export const store = configureStore({
    reducer:{
        cities: cityReducer,
        authStore: authReducer,
        upStore:signUpReducer
       
    }
})

