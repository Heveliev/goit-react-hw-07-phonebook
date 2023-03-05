import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts } from './thunk';


// fetchAllContacts()

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState:{
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: {
    [fetchAllContacts.fulfilled]: (state, action) => {
      return {
        ...state,
      items:action.payload}
    },
    [fetchAllContacts.pending]: state => {
      return { ...state, isLoading:true}
    },
[fetchAllContacts.rejected]: (state, action) => {
      return { ...state, error:action.payload}
    }


    }

})




    // reducers: {
    //     add(state, action) {
    //         state.items.unshift(action.payload)
    //     },
    //     remove(state, action) {
    //       state.items = state.items.filter(contact => contact.id !== action.payload)
    //     },
    // }
export const { add, remove} = contactsSlice.actions;