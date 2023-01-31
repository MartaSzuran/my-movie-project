import getData from '../api';
import getDefaultQuery from '../utils/defaultApiQueryParams';

const fetchMovieData = async (movieId) => {
  const otherUrlPart = `movie/${movieId}`;
  const response = await getData(getDefaultQuery(otherUrlPart));
  return response.data;
};

export default fetchMovieData;
