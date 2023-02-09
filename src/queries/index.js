import getData from '../api';
import getDefaultQuery from '../utils/defaultApiQueryParams';

const { REACT_APP_API_URL } = process.env;

export const fetchData = async (query) => {
  const response = await getData(getDefaultQuery(query));
  return response.data;
};

export const fetchServerReviewsData = async () => {
  const query = `${REACT_APP_API_URL}/reviews`;
  const response = await getData(query);
  return response.data;
};
