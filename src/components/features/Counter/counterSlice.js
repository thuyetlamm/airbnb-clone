import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'count',
  initialState: {
    countBig: 1,
    countMid: 0,
    countSmall: 0,
    countAnimal: 0,
    totalCount: 0,
  },
  reducers: {
    increateBig(state, action) {
      const newState = {
        ...state,
        countBig: state.countBig + 1,
      };
      return newState;
    },
    decreateBig(state, action) {
      const newState = {
        ...state,
        countBig: state.countBig - 1,
      };
      return newState;
    },
    increateMid(state, action) {
      const newState = {
        ...state,
        countMid: state.countMid + 1,
      };
      return newState;
    },
    decreateMid(state, action) {
      const newState = {
        ...state,
        countMid: state.countMid - 1,
      };
      return newState;
    },
    increateSmall(state, action) {
      const newState = {
        ...state,
        countSmall: state.countSmall + 1,
      };
      return newState;
    },
    decreateSmall(state, action) {
      const newState = {
        ...state,
        countSmall: state.countSmall - 1,
      };
      return newState;
    },
    increateAnimal(state, action) {
      const newState = {
        ...state,
        countAnimal: state.countAnimal + 1,
      };
      return newState;
    },
    decreateAnimal(state, action) {
      const newState = {
        ...state,
        countAnimal: state.countAnimal - 1,
      };
      return newState;
    },
    totalCount(state, action) {
      const newState = {
        ...state,
        totalCount: action.payload,
      };
      return newState;
    },
  },
});

const { actions, reducer } = counterSlice;
export const {
  increateBig,
  decreateBig,
  decreateSmall,
  increateSmall,
  increateAnimal,
  decreateAnimal,
  increateMid,
  decreateMid,
  totalCount,
} = actions;
export default reducer;
