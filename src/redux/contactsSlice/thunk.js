import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'api/fetchApi';


export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await getContacts()
    return response
  }
)

console.log(fetchAllContacts)