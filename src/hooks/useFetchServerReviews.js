import { useQuery } from 'react-query';
import { fetchServerReviewsData } from '../queries';

export default function useFetchServerReviews(params) {
  const { data, isLoading: isLoadingServerReviews } = useQuery('serverReviews', () => fetchServerReviewsData(params));
  return {
    serverReviews: data || [],
    isLoadingServerReviews,
  };
}
