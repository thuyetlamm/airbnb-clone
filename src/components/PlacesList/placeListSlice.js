import { createSlice } from '@reduxjs/toolkit';

const placeListSlide = createSlice({
  name: 'place',
  initialState: {
    places: [],
    status: null,
  },
  reducer: {},
});

const { reducer } = placeListSlide;
export default reducer;
