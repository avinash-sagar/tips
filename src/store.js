// store.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = {}; // Your initial state

const rootReducer = (state = initialState, action) => {
  // Define your reducers here
  return state;
};

const store = configureStore({
  reducer: rootReducer,
  // Add middleware or other store configuration options here
});

export default store;
