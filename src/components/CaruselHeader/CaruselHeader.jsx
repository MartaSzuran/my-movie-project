import { PropTypes } from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';
import { switchTitlesPopularity } from '../../constants/switchTitlesPopularity';
import './CaruselHeader.css';

function CaruselHeader({
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

CaruselHeader.propTypes = {
  switchTitle: PropTypes.string,
  handleSwitchTitleChange: PropTypes.func.isRequired,
};

CaruselHeader.defaultProps = {
  switchTitle: '',
};

export default CaruselHeader;
