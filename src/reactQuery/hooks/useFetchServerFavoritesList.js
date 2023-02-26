import { useQuery } from 'react-query';
import { fetchServerFavoritesList } from '../queries/index';

export default function useFetchServerFavoritesList() {
  const { data, isLoading: isLoadingServerFavoritesList } = useQuery('serverFavoritesList', () => fetchServerFavoritesList());
  return {
    serverFavoritesList: data || [],
    isLoadingServerFavoritesList,
  };
}
