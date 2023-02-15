import { useQuery } from 'react-query';
import { fetchServerReviewsData } from '../queries';

export default function useFetchServerReviews() {
  const { data, isLoading: isLoadingServerReviews } = useQuery('serverReviews', () => fetchServerReviewsData());
  return {
    serverReviews: data || {},
    isLoadingServerReviews,
  };
}
