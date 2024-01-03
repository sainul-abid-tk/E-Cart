import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice/productSlice'
import wishlistSlice from './Slice/wishlistSlice'
const cartStore=configureStore({
    reducer:{
        productSlice,
        wishlistSlice
    }
})
export default cartStore