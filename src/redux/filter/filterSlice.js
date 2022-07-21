import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onChangeFilter(_, action) {
      return action.payload;
    },
  },
});
export const { onChangeFilter } = filterSlice.actions;
export default filterSlice.reducer;
