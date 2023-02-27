import { gql } from '@apollo/client';

const ADD_TO_FAVORITES = gql`
  mutation AddTofavorites($movieId: String!, $poster: String!, $title: String!, $favorite: Boolean!, $releaseDate: String!) {
    addTofavorites(movie: {movieId: $movieId, poster: $poster, title: $title, favorite: $favorite, releaseDate: $releaseDate}) {
      movieId
      poster
      title
      favorite
      releaseDate
    }
  }
`;

export default ADD_TO_FAVORITES;
