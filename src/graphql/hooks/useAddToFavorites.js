import { useMutation } from '@apollo/client';
import { ADD_TO_FAVORITES } from '../mutations/index';

export default function useAddTofavorites() {
  const [
    addToFavorites,
    { data, loading: isLoadingMovieFavoritesData },
  ] = useMutation(ADD_TO_FAVORITES, {
    addToFavorites: {
      optimisticResponse: {
        addToFavorites: {
          __typename: 'Movie',
          movieId: '123',
          favortie: false,
        },
      },
    },
  });

  return {
    addToFavorites,
    serverMovieFavoriteData: data?.addTofavorites || {},
    isLoadingMovieFavoritesData,
  };
}
