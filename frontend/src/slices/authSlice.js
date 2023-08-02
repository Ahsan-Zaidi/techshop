/** SLICE TO SET USER CREDENTIALS INTO LOCAL STORAGE AND DESTROY THEM WHEN LOGGING OUT */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    //check to see if user info is in local storage if it is use it, if not set it to null
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            //set userInfo state into the action payload
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        }
    }
});

//export setCredentials as an action to be called
export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;