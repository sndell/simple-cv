import { createSlice } from '@reduxjs/toolkit';
import {
  ICV,
  IEducation,
  IEmployment,
  ILanguage,
  ILink,
  ISkill,
} from '../types/editor';
import { ObjectKey } from '../types/global';

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
  employment: [],
  education: [],
  language: [],
  skill: [],
  link: [],
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
      const { category }: { category: ObjectKey } = action.payload;
      const presets: {
        employment: IEmployment;
        education: IEducation;
        language: ILanguage;
        skill: ISkill;
        link: ILink;
      } = {
        employment: {
          id: Date.now().toString(),
          company: '',
          title: '',
          description: '',
          city: '',
          from: '',
          to: '',
        },
        education: {
          id: Date.now().toString(),
          school: '',
          degree: '',
          description: '',
          city: '',
          from: '',
          to: '',
        },
        language: {
          id: Date.now().toString(),
          name: 'Swedish',
          level: {
            number: 5,
            text: 'Expert',
          },
        },
        skill: {
          id: Date.now().toString(),
          name: 'problem solving',
          level: {
            number: 5,
            text: 'Expert',
          },
        },
        link: {
          id: Date.now().toString(),
          label: '',
          url: '',
        },
      };

      state[category] = [...state[category], presets[category]];
    },

    CATEGORY_CHANGE: (state, action) => {
      const { id, property, value, category } = action.payload;
      const key = category as ObjectKey;

      return {
        ...state,
        [key]: state[key].map((item: { id: string }) =>
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
  const key = category as ObjectKey;
  return state.edit[key].map((item) => ({ id: item.id }));
};
export const selectByCategoryAndId = (
  state: { edit: ICV },
  category: string,
  id: string
) => {
  const key = category as ObjectKey;
  return state.edit[key].filter((item) => item.id === id)[0];
};

export default edit.reducer;
