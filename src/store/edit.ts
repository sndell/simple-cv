import { createSlice } from '@reduxjs/toolkit';

export const edit = createSlice({
  name: 'edit',
  initialState: {
    mode: '',
  },
  reducers: {
    SET_MODE: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { SET_MODE } = edit.actions;
export const selectHeaders = (state: any) => state.auth.headers;
export default edit.reducer;