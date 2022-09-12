import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '~/api/userApi';
import StorageKeys from '~/constants/storage-keys';
export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await userApi.register(payload);
  //save data to local storage
  localStorage.setItem(StorageKeys.ACCESS_TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  // return user date
  return data.user;
});
export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);
  //save data to local storage
  localStorage.setItem(StorageKeys.ACCESS_TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  // return user date
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logOut(state) {
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { actions, reducer } = userSlice;
export const { logOut } = actions;
export default reducer;
