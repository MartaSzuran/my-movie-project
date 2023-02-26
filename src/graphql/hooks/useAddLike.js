import { useMutation } from '@apollo/client';
import { ADD_LIKE } from '../mutations/index';

export default function useAddLike() {
  const [addLike, { data, loading: isLoadingMovieLikeData }] = useMutation(ADD_LIKE, {
    addLike: {
      optimisticResponse: {
        addLike: {
          __typename: 'Movie',
          movieId: '123',
          liked: false,
        },
      },
    },
  });

  return {
    addLike,
    serverMovieLikeData: data?.addLike || {},
    isLoadingMovieLikeData,
  };
}
