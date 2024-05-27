import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import dashSlice from "./slices/dashSlice";

export const store = configureStore({
  reducer: { cart: CartSlice, dash: dashSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
