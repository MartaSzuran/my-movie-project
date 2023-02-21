import { getData } from '../../api';

const { REACT_APP_API_URL } = process.env;

export default async function fetchServerReviewsData(params) {
  const query = `${REACT_APP_API_URL}/reviews/${params}`;
  const response = await getData(query);
  return response.data;
}
