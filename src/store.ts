import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./features/reservationSlice";
import customerSlice from "./features/customersSlice";

//EXPORTING THE STATE IT'S SELF!!!
export const store = configureStore({
  reducer: {
    reservation: reservationSlice,
    customers: customerSlice,
  },
});

//EXPORTING THE STATE TYPE!!!
export type RootState = ReturnType<typeof store.getState>;

//EXPORTING THE DISPATCH TYPE!!!
export type AppDispatch = typeof store.dispatch;
