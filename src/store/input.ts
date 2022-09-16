import { createSlice } from '@reduxjs/toolkit';
import { isTemplateSpan } from 'typescript';
import { ICV } from '../types/editor';

const initialState: { id: string } = {
  id: '',
};

export const input = createSlice({
  name: 'input',
  initialState,
  reducers: {
    SET_ID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { SET_ID } = input.actions;
export const selectId = (state: { input: { id: string } }) => state.input.id;
export default input.reducer;
