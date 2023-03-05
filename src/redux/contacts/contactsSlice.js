import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contactsOperations';



export const contactsSlice = createSlice({
    name: 'contacts',
  initialState: {
      items: [],
      isLoading: false,
      error: null
    },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      return {
        ...state,
      items:action.payload}
    },
    [getContacts.pending]: state => {
      return { ...state, isLoading:true}
    },
[getContacts.rejected]: (state, action) => {
      return { ...state, error:action.payload}
    }


    }
})



// export const { add, remove} = contactsSlice.actions;

        // add(state, action) {
        //     state.items.unshift(action.payload)
        // },
        // remove(state, action) {
        //   state.items = state.items.filter(contact => contact.id !== action.payload)
        // },