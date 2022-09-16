import { configureStore } from '@reduxjs/toolkit';
import editReducer from './edit';
import inputReducer from './input';

export default configureStore({
  reducer: {
    edit: editReducer,
    input: inputReducer,
  },
});
