import { gql } from '@apollo/client';

const ADD_LIKE = (movieId, liked) => gql`
  mutation {
    addLike(movie: {movieId: ${movieId}, liked: ${liked}}) {
      movieId
      liked
    }
`;

export default ADD_LIKE;
