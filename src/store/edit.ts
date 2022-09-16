import { createSlice } from '@reduxjs/toolkit';
import { isTemplateSpan } from 'typescript';
import { ICV, IEducation, IEmployment, ILanguage } from '../types/editor';

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
  educations: [],
  languages: [],
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
      state.educations = [...state.educations, school];
    },

    NEW_LANGUAGE: (state) => {
      const language: ILanguage = {
        id: Date.now().toString(),
        name: '',
        level: '',
      };
      state.languages = [...state.languages, language];
    },

    CHANGE_EMPLOYMENT: (state, action) => {
      const { id, property, value } = action.payload;

      state.employments = [
        ...state.employments.map((item) =>
          item.id === id ? { ...item, [property]: value } : item
        ),
      ];
    },

    CHANGE_EDUCATION: (state, action) => {
      const { id, property, value } = action.payload;

      state.educations = [
        ...state.educations.map((item) =>
          item.id === id ? { ...item, [property]: value } : item
        ),
      ];
    },

    CHANGE_LANGUAGE: (state, action) => {
      const { id, property, value } = action.payload;

      state.languages = [
        ...state.languages.map((item) =>
          item.id === id ? { ...item, [property]: value } : item
        ),
      ];
    },
  },
});

export const {
  CHANGE_BASIC,
  CHANGE_ADDRESS,
  NEW_EMPLOYMENT,
  NEW_EDUCATION,
  NEW_LANGUAGE,
  CHANGE_EMPLOYMENT,
  CHANGE_EDUCATION,
  CHANGE_LANGUAGE,
} = edit.actions;
export const selectBasic = (state: { edit: ICV }) => state.edit.basic;
export const selectEmplyments = (state: { edit: ICV }) =>
  state.edit.employments;
export const selectEmplymentById = (state: { edit: ICV }, id: string) =>
  state.edit.employments.filter((item) => item.id === id)[0];
export const selectEducations = (state: { edit: ICV }) => state.edit.educations;
export const selectEducationById = (state: { edit: ICV }, id: string) =>
  state.edit.educations.filter((item) => item.id === id)[0];
export const selectLanguages = (state: { edit: ICV }) => state.edit.languages;
export const selectLanguageById = (state: { edit: ICV }, id: string) =>
  state.edit.languages.filter((item) => item.id === id)[0];

export const selectCv = (state: { edit: ICV }) => state.edit;
export default edit.reducer;
