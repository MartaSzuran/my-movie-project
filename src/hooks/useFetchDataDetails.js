import { useQuery } from 'react-query';
import fetchData from '../queries/index';

export function useFetchDataDetails(dataType, id) {
  const query = `${dataType}/${id}`;
  const { data, isLoading } = useQuery('details', () => fetchData(query));

  return {
    mediaData: data || {},
    isLoading,
  };
}

export function useFetchDataCreditsDetails(dataType, id) {
  const query = `${dataType}/${id}/credits`;
  const { data, isLoading: isLoadingCredits } = useQuery('credits', () => fetchData(query));
  return {
    creditsData: data || {},
    isLoadingCredits,
  };
}

export function useFetchDataReviewsDetails(dataType, id) {
  const query = `${dataType}/${id}/reviews`;
  const { data, isLoading: isLoadingReviews } = useQuery('reviews', () => fetchData(query));
  return {
    reviewsData: data || {},
    isLoadingReviews,
  };
}
