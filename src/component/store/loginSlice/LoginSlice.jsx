import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     isLogin : sessionStorage.getItem('isLogin') || {}
}

export const LoginSlice = createSlice({
    name:'isLogin',
    initialState,
    reducers:{
        registerUser: (state, action) =>{
            console.log(action.payload)
        }
    }
})

export const { registerUser} = LoginSlice.actions;
export default LoginSlice.reducer;