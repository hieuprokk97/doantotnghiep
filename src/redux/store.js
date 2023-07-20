import {configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import ProductReducer from "./slices/ProductSlice";
import FavoriteReducer from "./slices/FavoriteListSlice";
import CartReducer from './slices/CartSlice'
import AddressReducer from "./slices/AddressSlice";
import OrderReducer from './slices/OrderSlice';
import UserReducer from './slices/UserSlice';
export const store = configureStore({
    reducer: {
        product: ProductReducer,
        favoritelist: FavoriteReducer,
        cart: CartReducer,
        address: AddressReducer,
        order: OrderReducer,
        users: UserReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})