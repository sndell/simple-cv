import { configureStore } from '@reduxjs/toolkit';
import editReducer from './edit';

export default configureStore({
  reducer: {
    edit: editReducer,
  },
});