import { createSlice } from '@reduxjs/toolkit';
import { isTemplateSpan } from 'typescript';
import { ICV, IEmployment } from '../types/editor';

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
  employments: [],
};

export const edit = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    CHANGE_BASIC: (state, action) => {
      const { id, value } = action.payload;

      state.basic = {
        ...state.basic,
        [id]: value,
      };
    },

    CHANGE_ADDRESS: (state, action) => {
      const { id, value } = action.payload;
      state.basic = {
        ...state.basic,
        address: {
          ...state.basic?.address,
          [id]: value,
        },
      };
    },

    NEW_EMPLOYMENT: (state) => {
      const job: IEmployment = {
        id: Date.now().toString(),
        company: '',
        title: '',
        description: '',
        city: '',
        from: '',
        to: '',
      };
      state.employments = [...state.employments, job];
    },

    CHANGE_EMPLOYMENT: (state, action) => {
      const { employmentId, id, value } = action.payload;
      
      state.employments = [
        ...state.employments.map(item => item.id === employmentId ? {...item, [id]: value} : item)
      ]
    },
  },
});

export const {
  CHANGE_BASIC,
  CHANGE_ADDRESS,
  NEW_EMPLOYMENT,
  CHANGE_EMPLOYMENT,
} = edit.actions;
export const selectBasic = (state: { edit: ICV }) => state.edit.basic;
export const selectEmplyments = (state: { edit: ICV }) => state.edit.employments;
export const selectEmplymentById = (state: { edit: ICV }, id: string) =>
  state.edit.employments.filter((item) => item.id === id)[0];
export default edit.reducer;
