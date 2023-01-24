import { PropTypes } from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';
import switchTitlesPopularity from '../../constants/switchTitlesPopularity';
import './CaruselPopularHeader.css';

function CaruselPopularHeader({
  switchTitle,
  handleSwitchTitleChange,
}) {
  const caruselTitle = "What's popular";

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

CaruselPopularHeader.propTypes = {
  switchTitle: PropTypes.string,
  handleSwitchTitleChange: PropTypes.func.isRequired,
};

CaruselPopularHeader.defaultProps = {
  switchTitle: '',
};

export default CaruselPopularHeader;
