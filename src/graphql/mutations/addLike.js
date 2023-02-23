import { gql } from '@apollo/client';

const ADD_LIKE = gql`
  mutation AddLike($movieId: String!, $liked: Boolean!) {
    addLike(movie: {movieId: $movieId, liked: $liked}) {
      movieId
      liked
    }
  }
`;

export default ADD_LIKE;
