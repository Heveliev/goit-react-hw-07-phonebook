import axios from 'axios';

axios.defaults.baseURL = 'https://640362d7302b5d671c4e0f9b.mockapi.io';

const getContacts = async () => {
      const trendMovies = await axios('/contacts');
        return trendMovies;
}


export {getContacts}