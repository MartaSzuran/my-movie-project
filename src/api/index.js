import axios from 'axios';

const { REACT_APP_DB_DISCOVER_URL } = process.env;

const getData = async (query) => {
  try {
    return await axios.get(`${REACT_APP_DB_DISCOVER_URL}${query}`);
  } catch (error) {
    throw new Error('Error');
  }
};

export default getData;
