import { createSlice } from "@reduxjs/toolkit";
import { Item } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";

const OrderSlice = createSlice({
  name: 'order',
  initialState: {
    data: [],
  },
  reducers: {
    orderItems(state, action) {
      state.data.push({ ...action.payload})
    },
    emptyOrder(state, action) {
      state.data = []
    }
  },
});
export const { orderItems, emptyOrder } = OrderSlice.actions;
export default OrderSlice.reducer;