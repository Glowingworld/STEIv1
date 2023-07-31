// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authAction";
let userToken = "";
if (typeof window !== "undefined") {
  userToken = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null;
}

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},

  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user reducer...
  },
});

export default authSlice.reducer;
