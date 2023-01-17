import axios from 'axios';

const { REACT_APP_MOVIE_API_KEY } = process.env;
const { REACT_APP_DB_URL } = process.env;

const getData = async (params) => {
  try {
    return await axios.get(`${REACT_APP_DB_URL}?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=${params.sortBy}&include_adult=false&include_video=false&page=${params.pages}&with_watch_monetization_types=flatrate`);
  } catch (error) {
    throw new Error('Error');
  }
};

export default getData;
