import { gql } from '@apollo/client';

const ADD_TO_FAVORITES = gql`
  mutation AddTofavorites($movieId: String!, $poster: String!, $title: String!, $favorite: Boolean!) {
    addTofavorites(movie: {movieId: $movieId, poster: $poster, title: $title, favorite: $favorite}) {
      movieId
      poster
      title
      favorite
    }
  }
`;

export default ADD_TO_FAVORITES;
