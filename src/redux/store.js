import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productslice'
import wishlistReducer from './slices/wishlistSlice'
import cartReducer from './slices/cartSlice'


const store=configureStore({
    reducer:{
        productReducer,
        wishlistReducer,
        cartReducer
    }
})

export default store