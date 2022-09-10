import { configureStore } from '@reduxjs/toolkit';
import placeListReducer from '~/components/PlacesList/placeListSlice';
import categoryReducer from '~/components/NavigationBar/categorySlice';
import counterReducer from '~/components/features/Counter/counterSlice';
import detailPlaceReducer from '~/pages/DetailsPlace/DetailPlaceSlice';
const rootReducer = {
  placeList: placeListReducer,
  category: categoryReducer,
  counter: counterReducer,
  detailPlace: detailPlaceReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
