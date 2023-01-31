import getData from '../api';
import getDefaultQuery from '../utils/defaultApiQueryParams';

const fetchData = async (dataType, id) => {
  const query = `${dataType}/${id}`;
  const response = await getData(getDefaultQuery(query));
  return response.data;
};

export default fetchData;
