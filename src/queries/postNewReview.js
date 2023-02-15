import { postData } from '../api';

const { REACT_APP_API_URL } = process.env;

export default async function postNewReview(data) {
  const query = `${REACT_APP_API_URL}/reviews/addNew`;
  const response = await postData(query, data);
  return response.status;
}
