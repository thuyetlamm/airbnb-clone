import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    loading: true,
  },
  reducers: {
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

const { actions, reducer } = categorySlice;
export const { toggleLoading } = actions;
export default reducer;
