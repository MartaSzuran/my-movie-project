import getData from '../api';
import getDefaultQuery from '../utils/defaultApiQueryParams';

const fetchData = async (query) => {
  const response = await getData(getDefaultQuery(query));
  return response.data;
};

export default fetchData;
