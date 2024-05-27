import { BublType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { bublincart: BublType[] } = {
  bublincart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pushToCart: (state, actions: PayloadAction<BublType>) => {
      const findItem = state.bublincart.find(
        (obj) => obj.id === actions.payload.id
      );
      if (!!findItem && !!findItem.count) {
        findItem.count + 1;
      } else {
        state.bublincart.push({ ...actions.payload, count: "1" });
      }
      console.log(actions.payload);
    },
    incrementProd: (state, actions: PayloadAction<string | undefined>) => {
      const findItem = state.bublincart.find(
        (obj) => obj.id === actions.payload
      );
      if (!!findItem && !!findItem.count) {
        findItem.count = String(Number(findItem.count) + 1);
      }
    },
    dicrimentProd: (state, actions: PayloadAction<string | undefined>) => {
      const findItem = state.bublincart.find(
        (obj) => obj.id === actions.payload
      );
      if (!!findItem && !!findItem.count) {
        if (Number(findItem.count) > 1) {
          findItem.count = String(Number(findItem.count) - 1);
        } else {
          state.bublincart = state.bublincart.filter(
            (cart) => cart.id !== actions.payload
          );
        }
      }
    },
    removeFromCart: (state, actions: PayloadAction<string | undefined>) => {
      state.bublincart = state.bublincart.filter(
        (obj) => obj.id !== actions.payload
      );
    },
    clearCart: (state) => {
      state.bublincart = [];
    },
  },
});

export const {
  pushToCart,
  removeFromCart,
  clearCart,
  incrementProd,
  dicrimentProd,
} = CartSlice.actions;
export default CartSlice.reducer;
