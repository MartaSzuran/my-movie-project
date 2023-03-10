import { useMutation } from '@apollo/client';
import { ADD_LIKE } from '../mutations/index';

export default function useAddLike() {
  const [addLike] = useMutation(ADD_LIKE, {
    update: (cache) => {
      cache.modify({
        fields: {
          findMovieById(existingMoviesRefs = {}) {
            return { ...existingMoviesRefs, liked: !existingMoviesRefs.liked };
          },
        },
      });
    },
  });

  return (args) => {
    const {
      variables: {
        movieId,
        poster,
        title,
        liked,
        releaseDate,
      },
    } = args;
    return addLike({
      variables:
        {
          movieId,
          poster,
          title,
          liked,
          releaseDate,
        },
      optimisticResponse: {
        __typename: 'Mutation',
        addLike: {
          __typename: 'Movie',
          movieId,
          liked: true,
          poster,
          title,
          releaseDate,
        },
      },
    });
  };
}
