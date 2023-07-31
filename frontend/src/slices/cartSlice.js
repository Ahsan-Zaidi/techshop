import { createSlice } from "@reduxjs/toolkit";

//setting the initial state variable
/**check local storage to find any cart items if there is an item there we parse whatever is there else store that item in an empty array called 'cart' */
const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems: []};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
});

export default cartSlice.reducer;