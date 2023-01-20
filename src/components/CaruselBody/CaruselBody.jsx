import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import CardBasic from '../CardBasic/CardBasic';
import './CaruselBody.css';

function CaruselBody({ movies }) {
  return (
    <Box className="caruselBody">
      {movies.map(({
        posterPath,
        title,
        releaseDate,
        voteAverage,
      }) => (
        <CardBasic
          key={title}
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
      posterPath: PropTypes.string,
      title: PropTypes.string,
      releaseDate: PropTypes.string,
      voteAverage: PropTypes.number,
    }),
  ).isRequired,
};

export default CaruselBody;
