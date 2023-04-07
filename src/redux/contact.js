import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    },
    filters(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { add, remove, filters, appFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
