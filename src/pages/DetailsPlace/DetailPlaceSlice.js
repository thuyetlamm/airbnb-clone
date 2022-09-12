import { createSlice } from '@reduxjs/toolkit';
import StorageKeys from '~/constants/storage-keys';

const detailPlaceSlice = createSlice({
  name: 'detailPage',
  initialState: {
    loading: true,
    detailItem: JSON.parse(localStorage.getItem(StorageKeys.DETAIL_ITEM)) || [],
  },
  reducers: {
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
    addToItem(state, action) {
      const newItem = action.payload;
      state.detailItem.push(newItem);
      localStorage.setItem(
        StorageKeys.DETAIL_ITEM,
        JSON.stringify(state.detailItem)
      );
    },
  },
});

const { actions, reducer } = detailPlaceSlice;
export const { toggleLoading, addToItem } = actions;
export default reducer;
