// import * as contactsActions from './contactsActions';
import { fetchContacts } from 'fetchApi/fetchApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts =  createAsyncThunk('contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await fetchContacts();
            return contacts
        } catch (error) {
            return rejectWithValue(error)
        }
        
    })

    console.log(getContacts.pending)