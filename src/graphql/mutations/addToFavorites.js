import { gql } from '@apollo/client';

const ADD_TO_FAVORITES = (movieId, favorite) => gql`
  mutation {
    addLike(movie: {movieId: ${movieId}, favorite: ${favorite}}) {
      movieId
      favorite
    }
`;

export default ADD_TO_FAVORITES;
