import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'globalState',
  initialState: {
    activeId: 1,
    isShowCalendar: false,
    isShowFilterPage: false,
    filterCollection: {
      place: '',
      startDate: '',
      endDate: '',
    },
  },
  reducers: {
    setActiveId(state, action) {
      state.activeId = action.payload;
    },
    toggleShowCalendar(state, action) {
      state.isShowCalendar = action.payload;
    },
    toggleShowFilterPage(state, action) {
      state.isShowFilterPage = action.payload;
    },
    setFiltersPlace(state, action) {
      state.filterCollection.place = action.payload;
    },
    setFiltersStartDate(state, action) {
      state.filterCollection.startDate = action.payload;
    },
    setFiltersEndDate(state, action) {
      state.filterCollection.endDate = action.payload;
    },
  },
});

const { actions, reducer } = globalSlice;
export const {
  setActiveId,
  toggleShowCalendar,
  toggleShowFilterPage,
  setFiltersPlace,
  setFiltersStartDate,
  setFiltersEndDate,
} = actions;
export default reducer;
