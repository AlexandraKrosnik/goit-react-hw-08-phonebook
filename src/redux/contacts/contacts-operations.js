import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {}
});
const createContact = createAsyncThunk('contacts/create', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {}
});
const deleteContact = createAsyncThunk('contacts/delete', async contactId => {
  try {
    await axios.delete(`/contacts/${contactId}`);

    return contactId;
  } catch (error) {}
});
const operations = {
  fetchContacts,
  createContact,
  deleteContact,
};
export default operations;
