import { configureStore } from '@reduxjs/toolkit';
import placeListReducer from '~/components/PlacesList/placeListSlice';
import categoryReducer from '~/components/NavigationBar/categorySlice';
import counterReducer from '~/components/features/Counter/counterSlice';
const rootReducer = {
  placeList: placeListReducer,
  category: categoryReducer,
  counter: counterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
