import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import persistReducer from 'redux-persist/es/persistReducer';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import authSlice from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const reducers = combineReducers({
  auth:authSlice,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
   //middleware: [thunk]
});
