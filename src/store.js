// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/auth/authetication";
import { authApi } from "./Features/auth/authservices.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export default store;
