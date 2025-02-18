import { createSlice } from "@reduxjs/toolkit";
import Wishlist from "../../pages/Wishlist";

const wishSlice=createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishlist:(state,action)=>{
            state.wishlist.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
})



export default wishSlice.reducer
export const {addToWishlist,removeFromWishlist}=wishSlice.actions