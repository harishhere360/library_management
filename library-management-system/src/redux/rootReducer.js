import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  user: userReducer,
});

export default rootReducer;
