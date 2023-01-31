import getData from '../api';
import getDefaultQuery from '../utils/defaultApiQueryParams';

const fetchData = async (dataType, id) => {
  const otherUrlPart = `${dataType}/${id}`;
  const response = await getData(getDefaultQuery(otherUrlPart));
  return response.data;
};

export default fetchData;
