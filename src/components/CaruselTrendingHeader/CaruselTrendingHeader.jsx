import { PropTypes } from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';
import switchTitlesTrending from '../../constants/switchTitlesTrending';
import './CaruselTrendingHeader.css';

function CaruselTrendingHeader({
  switchTrendingTitle,
  handleSwitchTitleTrendingChange,
}) {
  const caruselTitle = "What's popular";

  return (
    <Box className="caruselHeader">
      <h4 className="caruselTitle">{caruselTitle}</h4>
      <Box className="caruselSwitchesContainer">
        <Tabs value={switchTrendingTitle} onChange={handleSwitchTitleTrendingChange}>
          {switchTitlesTrending.map((title) => (
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

CaruselTrendingHeader.propTypes = {
  switchTrendingTitle: PropTypes.string,
  handleSwitchTitleTrendingChange: PropTypes.func.isRequired,
};

CaruselTrendingHeader.defaultProps = {
  switchTrendingTitle: '',
};

export default CaruselTrendingHeader;
