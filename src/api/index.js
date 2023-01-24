import axios from 'axios';

const getData = async (query) => {
  try {
    return await axios.get(`${query}`);
  } catch (error) {
    throw new Error('Error');
  }
};

export default getData;
