import { PropTypes } from 'prop-types';
import { Box, Typography } from '@mui/material';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import PHOTOURL from '../../constants/photosBasicUrl';
import './SearchPageCard.css';

function SearchPageCard({
  posterPath,
  title,
  overview,
  releaseDate,
}) {
  return (
    <Box className="searchCardContainer">
      {posterPath
        ? (
          <img
            className="searchCardImage"
            src={`${PHOTOURL}${posterPath}`}
            alt={title}
          />
        )
        : <NoPhotographyIcon className="searchCardNoImage" />}
      <Box className="searchCardDescription">
        <Typography variant="h6" className="searchCardTitle">
          {title}
        </Typography>
        <Typography className="searchCard releaseDate">
          {releaseDate}
        </Typography>
        <Typography className="searchCardOverView">
          {overview}
        </Typography>
      </Box>
    </Box>
  );
}

SearchPageCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
};

SearchPageCard.defaultProps = {
  posterPath: '',
  overview: '',
  releaseDate: '',
};

export default SearchPageCard;
