import { configureStore } from '@reduxjs/toolkit';
import placeListReducer from '~/components/PlacesList/placeListSlice';
import categoryReducer from '~/components/NavigationBar/categorySlice';
import counterReducer from '~/components/features/Counter/counterSlice';
import detailPlaceReducer from '~/pages/DetailsPlace/DetailPlaceSlice';
import userReducer from '~/components/features/Auth/userSlice';
import globalStateReducer from '~/common/globalSlice';
const rootReducer = {
  placeList: placeListReducer,
  category: categoryReducer,
  counter: counterReducer,
  detailPlace: detailPlaceReducer,
  user: userReducer,
  globalState: globalStateReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
