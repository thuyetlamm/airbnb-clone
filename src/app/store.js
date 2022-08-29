import { configureStore } from '@reduxjs/toolkit';
import placeListReducer from '~/components/PlacesList/placeListSlice';
const rootReducer = {
  placeList: placeListReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
