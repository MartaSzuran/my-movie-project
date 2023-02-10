import axios from 'axios';

export const getData = async (query) => {
  try {
    return await axios.get(`${query}`);
  } catch (error) {
    throw new Error('Error');
  }
};

export const postData = async (query, data) => {
  try {
    return await axios.post(`${query}`, { data });
  } catch (error) {
    throw new Error('Error');
  }
};
