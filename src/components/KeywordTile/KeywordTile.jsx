import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './KeywordTile.css';

function KeywordTile({ name }) {
  return (
    <Box className="keywordTile style">
      <Typography className="keyword style">{name}</Typography>
    </Box>
  );
}

KeywordTile.propTypes = {
  name: PropTypes.string,
};

KeywordTile.defaultProps = {
  name: '',
};

export default KeywordTile;
