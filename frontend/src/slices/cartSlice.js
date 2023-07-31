import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

//setting the initial state variable
/**check local storage to find any cart items if there is an item there we parse whatever is there else store that item in an empty array called 'cart' */
const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems: []};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            //check to see if the item in the action already exists by matching the id of the selected item to an item id of whats in the cart
            const existItem = state.cartItems.find((x) => x._id === item._id);

            //map through the state of cart items if the item id exists add it to the quantity if else just add that item singularly 
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item]
            }

            return updateCart(state);
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;