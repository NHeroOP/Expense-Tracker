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
    },
    setNavState: (state, action) => {
      state.navOpen = action.payload
    }
  }
})

export const {toggleNav, setNavState} = pagesSlice.actions
export default pagesSlice.reducer
