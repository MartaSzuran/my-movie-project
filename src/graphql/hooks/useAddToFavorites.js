import { useMutation } from '@apollo/client';
import { ADD_TO_FAVORITES } from '../mutations/index';

export default function useAddTofavorites() {
  const [
    addToFavorites,
    { data, loading: isLoadingMovieFavoritesData },
  ] = useMutation(ADD_TO_FAVORITES);

  return {
    addToFavorites,
    serverMovieData: data?.addToFavorite || {},
    isLoadingMovieFavoritesData,
  };
}
