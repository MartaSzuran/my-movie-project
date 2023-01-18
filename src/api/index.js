import axios from 'axios';

const getData = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    throw new Error('Error');
  }
};

export default getData;
