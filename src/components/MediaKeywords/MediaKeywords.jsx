import { PropTypes } from 'prop-types';
import { Typography, Box } from '@mui/material';
import KeywordTile from '../KeywordTile/KeywordTile';
import './MediaKeywords.css';

function MediaKeywords({ keywords, isLoadingKeywords }) {
  return (
    <>
      <Typography className="infoTitle style">Keywords</Typography>
      <Box className="keywordsContainer">
        {keywords.map(({ id, name }) => <KeywordTile key={id} name={name} />)}
      </Box>
    </>
  );
}

MediaKeywords.propTypes = {
  keywords: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  isLoadingKeywords: PropTypes.bool,
};

MediaKeywords.defaultProps = {
  keywords: [{
    name: '',
  }],
  isLoadingKeywords: true,
};

export default MediaKeywords;
