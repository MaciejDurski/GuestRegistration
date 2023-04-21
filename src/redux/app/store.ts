import { configureStore } from "@reduxjs/toolkit";
import guestFormReducer from "../features/guestForm";

export const store = configureStore({
  reducer: {
    guestForm: guestFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
