import { createSlice } from '@reduxjs/toolkit';
import { isTemplateSpan } from 'typescript';
import { ICV, IEducation, IEmployment } from '../types/editor';

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
  education: [],
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
        ...state.employments.map((item) =>
          item.id === employmentId ? { ...item, [id]: value } : item
        ),
      ];
    },

    NEW_EDUCATION: (state) => {
      const school: IEducation = {
        id: Date.now().toString(),
        school: '',
        degree: '',
        description: '',
        city: '',
        from: '',
        to: '',
      };
      state.education = [...state.education, school];
    },

    CHANGE_EDUCATION: (state, action) => {
      const { educationId, id, value } = action.payload;

      state.education = [
        ...state.education.map((item) =>
          item.id === educationId ? { ...item, [id]: value } : item
        ),
      ];
    },
  },
});

export const {
  CHANGE_BASIC,
  CHANGE_ADDRESS,
  NEW_EMPLOYMENT,
  CHANGE_EMPLOYMENT,
  NEW_EDUCATION,
  CHANGE_EDUCATION,
} = edit.actions;
export const selectBasic = (state: { edit: ICV }) => state.edit.basic;
export const selectEmplyments = (state: { edit: ICV }) =>
  state.edit.employments;
export const selectEducations = (state: { edit: ICV }) => state.edit.education;
export const selectItemByCategoryAndId = (
  state: { edit: ICV },
  id: string,
  category: string
) => {
  if (category === 'employment')
    return state.edit.employments.filter((item) => item.id === id)[0];
  else if (category === 'education')
    return state.edit.education.filter((item) => item.id === id)[0];
};

export const selectCv = (state: { edit: ICV }) => state.edit;
export default edit.reducer;
