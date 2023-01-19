import { PropTypes } from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';
import './CaruselHeader.css';

function CaruselHeader({
  caruselTitle,
  switchTitle,
  handleSwitchTitleChange,
  switchTitlesPopularity,
}) {
  return (
    <Box className="caruselHeader">
      <h4 className="caruselTitle">{caruselTitle}</h4>
      <Box className="caruselSwitchesContainer">
        <Tabs value={switchTitle} onChange={handleSwitchTitleChange}>
          {switchTitlesPopularity.map((title) => (
            <Tab
              key={title.name}
              label={title.name}
              value={title.name}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

CaruselHeader.propTypes = {
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

export default CaruselHeader;
