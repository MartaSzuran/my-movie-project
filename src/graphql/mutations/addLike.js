import { gql } from '@apollo/client';

const ADD_LIKE = gql`
  mutation AddLike($movieId: String!, $poster: String!, $title: String!, $liked: Boolean!) {
    addLike(movie: {movieId: $movieId, poster: $poster, title: $title, liked: $liked}) {
      movieId
      poster
      title
      favorite
    }
  }
`;

export default ADD_LIKE;
