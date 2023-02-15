import { useQuery } from 'react-query';
import { fetchData } from '../queries/index';

export default function useFetchDataReviewsDetails(dataType, id) {
  const query = `${dataType}/${id}/reviews`;
  const { data, isLoading: isLoadingReviews } = useQuery('reviews', () => fetchData(query));
  return {
    reviewsData: data || {},
    isLoadingReviews,
  };
}
