import { createSlice } from "@reduxjs/toolkit";
import { interpolate } from "react-native-reanimated";

const CartListSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            const itemInCart = state.data.find((item) => item.id == action.payload.id);
            if (itemInCart) {
                itemInCart.qty += + 1;
            } else {
                state.data.push({ ...action.payload, quantity: 1 })
            }
        },
        incrementQuantity: (state, action) => {
            const itemInCart = state.data.find((item) => item.id == action.payload.id)
            itemInCart.qty += 1;
        },
        decrementQuantity: (state, action) => {
            const itemInCart = state.data.find((item) => item.id == action.payload.id);
            if (itemInCart.qty == 1) {
                const removeFromCart = state.data.filter((item) => item.id !== action.payload.id);
                state.cart = removeFromCart;
            } else {
                itemInCart.qty--;
            }
        },
        removeFromCart: (state, action) => {
            state.data.splice(state.data.findIndex((item) => item.id === action.payload.id), 1);
        },
        emptyCart: (state, action) => {
            state.data = []
        }
    }
})
export const { addItemToCart, incrementQuantity, decrementQuantity, removeFromCart, emptyCart } = CartListSlice.actions;
export default CartListSlice.reducer;