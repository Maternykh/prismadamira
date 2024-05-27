import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { isDash: boolean } = {
  isDash: false,
};

export const dashSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setDash: (state, actions: PayloadAction<boolean>) => {
      state.isDash = actions.payload;
    },
  },
});

export const { setDash } = dashSlice.actions;
export default dashSlice.reducer;
