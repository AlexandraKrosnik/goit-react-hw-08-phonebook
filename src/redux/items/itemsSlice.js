import { createSlice } from '@reduxjs/toolkit';
const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      state.filter(item => item !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = itemsSlice.actions;
export default itemsSlice.reducer;
