import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';
import CaruselHeader from '../CaruselHeader/CaruselHeader';
import CaruselBody from '../CaruselBody/CaruselBody';
import './Carusel.css';

function Carusel({
  caruselTitle,
  switchTitle,
  handleSwitchTitleChange,
  switchTitlesPopularity,
}) {
  return (
    <Box className="caruselContainer">
      <CaruselHeader
        caruselTitle={caruselTitle}
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
        switchTitlesPopularity={switchTitlesPopularity}
      />
      <CaruselBody />
    </Box>
  );
}

Carusel.propTypes = {
  caruselTitle: PropTypes.string.isRequired,
  switchTitle: PropTypes.string.isRequired,
  handleSwitchTitleChange: PropTypes.func.isRequired,
  switchTitlesPopularity: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Carusel;
