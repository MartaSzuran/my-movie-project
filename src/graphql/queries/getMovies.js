import { gql } from '@apollo/client';

const GETMOVIES = gql`
  query {
    getMovies {
      movieId
      liked
    }
  }
`;

export default GETMOVIES;
