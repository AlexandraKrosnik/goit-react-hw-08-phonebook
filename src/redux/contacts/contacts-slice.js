import { createSlice } from '@reduxjs/toolkit';
import contactOperations from './contacts-operations';
import { authOperations } from 'redux/auth';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactOperations.createContact.fulfilled](state, action) {
      state.push(action.payload);
    },
    [contactOperations.fetchContacts.fulfilled](state, action) {
      return action.payload;
    },
    [contactOperations.deleteContact.fulfilled](state, action) {
      console.log(action.payload);
      return state.filter(item => item.id !== action.payload);
    },
    [authOperations.logOut.fulfilled](state, action) {
      return [];
    },
  },
});
export default contactsSlice.reducer;