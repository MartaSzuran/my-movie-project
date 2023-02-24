import { getData } from '../../api';

const { REACT_APP_API_URL } = process.env;

export default async function fetchServerFavoritesList() {
  const query = `${REACT_APP_API_URL}/favorites/`;
  const response = await getData(query);
  return response.data;
}
