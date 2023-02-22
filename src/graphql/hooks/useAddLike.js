import { useMutation } from '@apollo/client';
import { ADD_LIKE } from '../mutations/index';

export default function useAddLike() {
  const [addLike, { data, loading: isLoadingMovieLikeData }] = useMutation(ADD_LIKE);

  return {
    addLike,
    serverMovieLikeData: data?.addLike || {},
    isLoadingMovieLikeData,
  };
}
