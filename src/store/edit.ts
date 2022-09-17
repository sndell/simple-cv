import { createSlice } from '@reduxjs/toolkit';
import { ICV, IEducation, IEmployment, ILanguage } from '../types/editor';

const initialState: ICV = {
  basic: {
    name: 'Elias Bergström',
    email: 'elias@gmail.com',
    phone: '0701234123',
    title: 'Developer',
    summary: '',
    address: {
      city: 'Stockholm',
      country: 'Sweden',
      street: 'Korphoppsgatan 33',
      zip: '120 64',
    },
  },
  employments: [],
  educations: [],
  languages: [],
  id: Date.now().toString(),
  layout: 'default',
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

    CATEGORY_NEW: (state, action) => {
      const { category } = action.payload;

      switch (category) {
        case 'employment':
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
          break;
        case 'education':
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
          break;
        case 'language':
          const language: ILanguage = {
            id: Date.now().toString(),
            name: 'Swedish',
            level: {
              number: 5,
              text: 'Expert',
            },
          };
          state.languages = [...state.languages, language];
          break;
        default:
          break;
      }
    },

    CATEGORY_CHANGE: (state, action) => {
      const { id, property, value, category } = action.payload;

      switch (category) {
        case 'employment':
          state.employments = [
            ...state.employments.map((item) =>
              item.id === id ? { ...item, [property]: value } : item
            ),
          ];
          break;
        case 'education':
          state.educations = [
            ...state.educations.map((item) =>
              item.id === id ? { ...item, [property]: value } : item
            ),
          ];
          break;
        case 'language':
          state.languages = [
            ...state.languages.map((item) =>
              item.id === id ? { ...item, [property]: value } : item
            ),
          ];
          break;
        default:
          break;
      }
    },
  },
});

export const { CHANGE_BASIC, CHANGE_ADDRESS, CATEGORY_NEW, CATEGORY_CHANGE } =
  edit.actions;

export const selectCv = (state: { edit: ICV }) => state.edit;
export const selectBasic = (state: { edit: ICV }) => state.edit.basic;
export const selectByCategory = (state: { edit: ICV }, category: string) => {
  switch (category) {
    case 'employment':
      const employmentIds: { id: string }[] = state.edit.employments.map(
        (item) => {
          return { id: item.id };
        }
      );
      return employmentIds;
    case 'education':
      const educationIds: { id: string }[] = state.edit.educations.map(
        (item) => {
          return { id: item.id };
        }
      );
      return educationIds;
    case 'language':
      const languageIds: { id: string }[] = state.edit.languages.map((item) => {
        return { id: item.id };
      });
      return languageIds;
    default:
      return [];
  }
};
export const selectByCategoryAndId = (
  state: { edit: ICV },
  category: string,
  id: string
) => {
  switch (category) {
    case 'employment':
      return state.edit.employments.filter((item) => item.id === id)[0];
    case 'education':
      return state.edit.educations.filter((item) => item.id === id)[0];
    case 'language':
      return state.edit.languages.filter((item) => item.id === id)[0];
    default:
      return;
  }
};

export default edit.reducer;
