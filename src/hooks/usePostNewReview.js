import { useMutation, useQueryClient } from 'react-query';
import { nanoid } from 'nanoid';
import { postNewReview } from '../queries';

export default function usePostNewReview() {
  const queryClient = useQueryClient();
  return useMutation(postNewReview, {
    onMutate: async (newReview) => {
      await queryClient.cancelQueries('serverReviews');
      const previousReviewsData = queryClient.getQueryData('serverReviews');
      queryClient.setQueryData('serverReviews', (oldQueryData) => (
        [
          ...oldQueryData,
          { _id: nanoid(), ...newReview },
        ]
      ));
      return previousReviewsData;
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('serverReviews', context.previousReviewsData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('serverReviews');
    },
  });
}
