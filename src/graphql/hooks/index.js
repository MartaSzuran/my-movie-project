import { useQuery } from '@apollo/client';
import GETMOVIES from '../queries/index';

export default function useGetMovies() {
  const { loading: isLoadingMoviesServerData, error, data } = useQuery(GETMOVIES);
  return {
    serverMoviesData: data || [],
    isLoadingMoviesServerData,
  };
}
