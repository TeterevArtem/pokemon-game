import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice ({
  name: "loginForm",
  initialState : {
    isAuth : false,
  },
  reducers: {
    changeTextButton: state => ({
      ...state, 
      isAuth: !state.isAuth
    })
  }
})

export const {changeTextButton} = slice.actions;
export const authState = state => state.loginForm.isAuth;

export default slice.reducer;