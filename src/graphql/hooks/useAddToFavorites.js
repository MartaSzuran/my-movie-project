import { useMutation } from '@apollo/client';
import { ADD_TO_FAVORITES } from '../mutations/index';

export default function useAddTofavorites() {
  const [addTofavorites] = useMutation(ADD_TO_FAVORITES, {
    update: (cache) => {
      cache.modify({
        fields: {
          findMovieById(existingMoviesRefs = {}) {
            return { ...existingMoviesRefs, favorite: !existingMoviesRefs.favorite };
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
        favorite,
        releaseDate,
      },
    } = args;
    return addTofavorites({
      variables:
        {
          movieId,
          poster,
          title,
          favorite,
          releaseDate,
        },
      optimisticResponse: {
        __typename: 'Mutation',
        addTofavorites: {
          __typename: 'Movie',
          movieId,
          favorite: true,
          poster,
          title,
          releaseDate,
        },
      },
    });
  };
}
