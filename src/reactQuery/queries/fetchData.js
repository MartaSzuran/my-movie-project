import { getData } from '../../api';
import getDefaultQuery from '../../utils/defaultApiQueryParams';

export default async function fetchData(query) {
  const response = await getData(getDefaultQuery(query));
  return response.data;
}
