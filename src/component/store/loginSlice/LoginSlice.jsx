import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     isLogin : sessionStorage.getItem('id')? {
        id:sessionStorage.getItem('id'),
        token:sessionStorage.getItem('token'),
        userType:sessionStorage.getItem('userType'),
     } : {}
}


export const LoginSlice = createSlice({
    name:'isLogin',
    initialState,
    reducers:{
        registerUser: (state, action) => {
            const { id, token, userType } = action.payload;
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userType", userType);
            state.isLogin = { id, token, userType };
          },
          logOutUser: (state) => {
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("userType");
      
            state.isLogin = {};
          },
    }
})

export const { registerUser, logOutUser} = LoginSlice.actions;
export default LoginSlice.reducer;