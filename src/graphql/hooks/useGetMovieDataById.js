import { useQuery } from '@apollo/client';
import GET_MOVIE from '../queries/index';

export default function useGetMovieDataById(movieId) {
  const { loading: isLoadingMovieServerData, data } = useQuery(
    GET_MOVIE,
    { variables: { movieId } },
  );
  return {
    serverMovieData: data?.findMovieById || {},
    isLoadingMovieServerData,
  };
}
