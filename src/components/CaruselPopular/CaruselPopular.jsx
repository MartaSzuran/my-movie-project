import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';
import CaruselHeader from '../CaruselHeader/CaruselHeader';
import CaruselBody from '../CaruselBody/CaruselBody';
import './CaruselPopular.css';

function CaruselPopular({
  switchTitle,
  handleSwitchTitleChange,
  dataPopular,
}) {
  return (
    <Box className="caruselContainer">
      <CaruselHeader
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
      />
      <CaruselBody
        dataPopular={dataPopular}
        switchTitle={switchTitle}
      />
    </Box>
  );
}

CaruselPopular.propTypes = {
  switchTitle: PropTypes.string,
  handleSwitchTitleChange: PropTypes.func.isRequired,
  dataPopular: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      release_date: PropTypes.string,
      first_air_date: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
};

CaruselPopular.defaultProps = {
  switchTitle: '',
  dataPopular: [{
    title: '',
    name: '',
    release_date: '',
    first_air_date: '',
    vote_average: 0,
  }],
};

export default CaruselPopular;
