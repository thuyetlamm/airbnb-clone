import { configureStore } from '@reduxjs/toolkit';
import placeListReducer from '~/components/PlacesList/placeListSlice';
import categoryReducer from '~/components/NavigationBar/categorySlice';
const rootReducer = {
  placeList: placeListReducer,
  category: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
