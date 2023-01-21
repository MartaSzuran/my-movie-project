import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';
import CaruselHeader from '../CaruselHeader/CaruselHeader';
import CaruselBody from '../CaruselBody/CaruselBody';
import './CaruselPopular.css';

function CaruselPopular({
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
      <CaruselBody
        movies={movies}
      />
    </Box>
  );
}

CaruselPopular.propTypes = {
  switchTitle: PropTypes.string,
  handleSwitchTitleChange: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
};

CaruselPopular.defaultProps = {
  switchTitle: '',
  movies: [{
    title: '',
    release_date: '',
    vote_average: 0,
  }],
};

export default CaruselPopular;
