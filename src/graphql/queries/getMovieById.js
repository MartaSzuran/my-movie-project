import { gql } from '@apollo/client';

const GET_MOVIE = gql`
  query FindMovieById($movieId: Int!) {
    findMovieById(movieId: $movieId) {
      movieId
      liked
      favorite
    }
  }
`;

export default GET_MOVIE;
