import { gql } from '@apollo/client';

const ADD_LIKE = gql`
  mutation AddLike($movieId: String!, $poster: String!, $title: String!, $liked: Boolean!, $releaseDate: String!) {
    addLike(movie: {movieId: $movieId, poster: $poster, title: $title, liked: $liked, releaseDate: $releaseDate}) {
      movieId
      poster
      title
      liked
      releaseDate
    }
  }
`;

export default ADD_LIKE;
