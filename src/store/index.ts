import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import optionReducer from "./slices/optionSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    option: optionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
