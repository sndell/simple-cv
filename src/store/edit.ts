import { createSlice } from '@reduxjs/toolkit';
import {
  ICV,
  IEducation,
  IEmployment,
  ILanguage,
  ISkill,
} from '../types/editor';

type ObjectKey = 'employments' | 'educations' | 'languages' | 'skills';

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
  skills: [],
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
        case 'skill':
          const skill: ISkill = {
            id: Date.now().toString(),
            name: 'problem solving',
            level: {
              number: 5,
              text: 'Expert',
            },
          };
          state.skills = [...state.skills, skill];
          break;
        default:
          break;
      }
    },

    CATEGORY_CHANGE: (state, action) => {
      const { id, property, value, category } = action.payload;

      const objects = {
        educations: [...state.educations],
        employments: [...state.employments],
        languages: [...state.languages],
        skills: [...state.skills],
      };

      type ObjectKey = keyof typeof objects;
      const formatted = `${category}s` as ObjectKey;

      return {
        ...state,
        [formatted]: state[formatted].map((item: { id: string }) =>
          item.id === id ? { ...item, [property]: value } : item
        ),
      };
    },
  },
});

export const { CHANGE_BASIC, CHANGE_ADDRESS, CATEGORY_NEW, CATEGORY_CHANGE } =
  edit.actions;

export const selectCv = (state: { edit: ICV }) => state.edit;
export const selectBasic = (state: { edit: ICV }) => state.edit.basic;
export const selectByCategory = (state: { edit: ICV }, category: string) => {
  const formatted = `${category}s` as ObjectKey;
  return state.edit[formatted].map((item) => ({ id: item.id }));
};
export const selectByCategoryAndId = (
  state: { edit: ICV },
  category: string,
  id: string
) => {
  const formatted = `${category}s` as ObjectKey;
  return state.edit[formatted].filter((item) => item.id === id)[0];
};

export default edit.reducer;
