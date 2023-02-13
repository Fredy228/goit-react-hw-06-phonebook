import { createSlice } from '@reduxjs/toolkit';

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    increment1: state => {
      // state.value += 1;
    },
    decrement2: state => {
      // state.value -= 1;
    },
  },
});

export const { increment1, decrement2 } = contactsReducer.actions;
// export default contactsReducer.reducer;

export const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    increment: state => {
      // state.value += 1;
    },
    decrement: state => {
      // state.value -= 1;
    },
  },
});

export const { increment, decrement } = filterReducer.actions;
// export default filterReducer.reducer;
