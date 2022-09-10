import { createSlice } from '@reduxjs/toolkit';

const detailPlaceSlice = createSlice({
  name: 'detailPage',
  initialState: {
    loading: true,
    detailItem: [],
  },
  reducers: {
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
    addToItem(state, action) {
      const newItem = action.payload;
      state.detailItem.push(newItem);
    },
  },
});

const { actions, reducer } = detailPlaceSlice;
export const { toggleLoading, addToItem } = actions;
export default reducer;
