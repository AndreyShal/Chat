import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import users from "./users";
import { usersApi } from "./usersApi";
// import posts from "./posts";

export const store = configureStore({
  reducer: {
    users,
    [usersApi.reducerPath]: usersApi.reducer,
    // posts,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
