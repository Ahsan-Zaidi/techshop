import { createSlice } from "@reduxjs/toolkit";

//setting the initial state variable
/**check local storage to find any cart items if there is an item there we parse whatever is there else store that item in an empty array called 'cart' */
const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems: []};

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

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

            //calculate items price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

            //calculate Shipping price (if order > 100$ shipping free, if not 10$)
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

            //calculate Tax price of 15%
            state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

            //calculate the total price
            state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2);

            //saving the total into localstorage
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;