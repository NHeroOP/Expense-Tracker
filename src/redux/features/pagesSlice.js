import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  navOpen: true
}

export const pagesSlice = createSlice({
  name: "navState",
  initialState,
  reducers: {
    toggleNav: (state=initialState, action) => {
      state.navOpen = !state.navOpen
    }
  }
})

export const {toggleNav} = pagesSlice.actions
export default pagesSlice.reducer
