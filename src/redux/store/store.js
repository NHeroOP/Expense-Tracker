import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice"
import pageReducer from "../features/pagesSlice"

export const store = configureStore({
  reducer: {
    expenseData: dataReducer,
    navState: pageReducer
  }
})