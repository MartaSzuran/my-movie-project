import { gql } from '@apollo/client';

const ADD_TO_FAVORITES = gql`
  mutation AddTofavorites($movieId: String!, $favorite: Boolean!) {
    addTofavorites(movie: {movieId: $movieId, favorite: $favorite}) {
      movieId
      favorite
    }
  }
`;

export default ADD_TO_FAVORITES;
