import axios from 'axios';

axios.defaults.baseURL = 'https://640362d7302b5d671c4e0f9b.mockapi.io';


export const fetchContacts = async () => {
        const {data} = await axios('/contacts');
        return data;
}