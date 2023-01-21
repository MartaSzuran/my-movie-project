import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import CardBasic from '../CardBasic/CardBasic';
import './CaruselBody.css';

function CaruselBody({ movies }) {
  return (
    <Box className="caruselBody">
      { movies.map(({
        id,
        poster_path: posterPath,
        title,
        release_date: releaseDate,
        vote_average: voteAverage,
      }) => (
        <CardBasic
          key={id}
          posterPath={posterPath}
          title={title}
          releaseDate={releaseDate}
          voteAverage={voteAverage}
        />
      ))}
    </Box>
  );
}

CaruselBody.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
};

CaruselBody.defaultProps = {
  movies: [{
    title: '',
    release_date: '',
    vote_average: 0,
  }],
};

export default CaruselBody;
