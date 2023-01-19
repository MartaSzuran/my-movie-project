import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';
import CaruselHeader from '../CaruselHeader/CaruselHeader';
import CaruselBody from '../CaruselBody/CaruselBody';
import './CaruselPopular.css';

function CaruselPopular({
  switchTitle,
  handleSwitchTitleChange,
}) {
  return (
    <Box className="caruselContainer">
      <CaruselHeader
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
      />
      <CaruselBody />
    </Box>
  );
}

CaruselPopular.propTypes = {
  switchTitle: PropTypes.string,
  handleSwitchTitleChange: PropTypes.func.isRequired,
};

CaruselPopular.defaultProps = {
  switchTitle: '',
};

export default CaruselPopular;
