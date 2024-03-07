import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  chartTheme: 'light', // Set initial chart theme (can be customized)
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
    setChartTheme: (state, action) => {
      state.chartTheme = action.payload;
    },
  },
});

export const { setTheme, setChartTheme } = themeSlice.actions;

export default themeSlice.reducer
