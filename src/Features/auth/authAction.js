// authActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
const backendURL = "http://localhost:8045";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      let res = await fetch("http://localhost:8045/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),

        headers: {
          "Content-type": "application/json",
        },
      });

      let data = await res.json();

      // store user's token in local storage
      console.log();
      localStorage.setItem("userToken", data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
