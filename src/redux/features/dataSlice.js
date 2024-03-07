import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  expData: localStorage.getItem("expData") ? JSON.parse(localStorage.getItem("expData")) : []
}

export const dataSlice = createSlice({
  name: "expenseData",
  initialState,
  reducers: {
    addExpenseData: (state, action) => {
      const data = {
        name: action.payload.name,
        date: action.payload.date || "no date",
        isIncome: action.payload.isIncome,
        price: action.payload.price,
        id: nanoid(), 
      }

      state.expData.push(data)
    },
    removeExpenseData: (state, action) => {
      state.expData = state.expData.filter(data => (
        data.id !== action.payload
        ))
    },
    setExpenseData: (state, action) => {
      state.expData = action.payload
    }
  }
})

export const {addExpenseData, removeExpenseData, setExpenseData} = dataSlice.actions
export default dataSlice.reducer
