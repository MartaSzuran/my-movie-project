import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';
import CaruselHeader from '../CaruselHeader/CaruselHeader';
import CaruselBody from '../CaruselBody/CaruselBody';
import './CaruselPopularMovies.css';

function CaruselPopularMovies({
  switchTitle,
  handleSwitchTitleChange,
  movies,
}) {
  return (
    <Box className="caruselContainer">
      <CaruselHeader
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
      />
      <CaruselBody movies={movies} />
    </Box>
  );
}

CaruselPopularMovies.propTypes = {
  switchTitle: PropTypes.string,
  handleSwitchTitleChange: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      posterPath: PropTypes.string,
      title: PropTypes.string,
      releaseDate: PropTypes.string,
      voteAverage: PropTypes.number,
    }),
  ).isRequired,
};

CaruselPopularMovies.defaultProps = {
  switchTitle: '',
};

export default CaruselPopularMovies;
