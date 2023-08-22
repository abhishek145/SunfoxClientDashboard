import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './apis/userApis';
import uiSliceReducer from './uiSlice'; 

const store = configureStore({
  reducer: {
    user: userApi.reducer,
    ui: uiSliceReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
