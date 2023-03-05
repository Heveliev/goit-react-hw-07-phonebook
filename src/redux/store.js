import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice/filterSlice';
import {contactsSlice } from './contactsSlice/contactsSlice';
// import { getContacts } from 'api/fetchApi';
// getContacts()




export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
  },
})

