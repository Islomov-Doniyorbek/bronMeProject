import { configureStore } from "@reduxjs/toolkit";
import  signInSlice  from "./lib/featers/signIn.Slice";
import  authSlice  from "./lib/featers/auth.Slice";

export const store = configureStore({
    reducer:{
        // fake:()=>"nabi",
        signin: signInSlice,
        auth: authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 