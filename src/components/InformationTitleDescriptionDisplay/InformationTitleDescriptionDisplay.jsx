import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './InformationTitleDescriptionDisplay.css';

function InformationTitleDescriptionDisplay({ title, description }) {
  return (
    <Box>
      <Typography className="infoTitle style">{title}</Typography>
      <Typography className="infoDescription style">{description}</Typography>
    </Box>
  );
}

InformationTitleDescriptionDisplay.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

InformationTitleDescriptionDisplay.defaultProps = {
  title: '',
  description: '',
};

export default InformationTitleDescriptionDisplay;
