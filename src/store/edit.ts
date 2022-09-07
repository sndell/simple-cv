import { createSlice } from '@reduxjs/toolkit';
import { ICV } from '../types/editor';

const initialState: ICV = {
  basic: {
    name: '',
    email: '',
    phone: '',
    title: '',
    summary: '',
    address: {
      city: '',
      country: '',
      street: '',
      zip: '',
    },
  },
};

export const edit = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    CHANGE_BASIC: (state, action) => {
      const { id, value } = action.payload;
      
      state.basic = {
        ...state.basic,
        [id]: value
      }
    },

    CHANGE_ADDRESS: (state, action) => {
      const { id, value } = action.payload;
      state.basic = {
        ...state.basic,
        address: {
          ...state.basic?.address,
          [id]: value
        }
      }
    }
  },
});

export const { CHANGE_BASIC, CHANGE_ADDRESS } = edit.actions;
export const selectBasic = (state: {edit: ICV}) => state.edit.basic;
export default edit.reducer;
