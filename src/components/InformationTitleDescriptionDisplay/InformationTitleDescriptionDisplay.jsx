import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import './InformationTitleDescriptionDisplay.css';

function InformationTitleDescriptionDisplay({ title, description }) {
  return (
    <>
      <Typography className="infoTitle style">{title}</Typography>
      <Typography className="infoDescription style">{description}</Typography>
    </>
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
