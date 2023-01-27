import { PropTypes } from 'prop-types';
import { Box, Typography } from '@mui/material';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { nanoid } from 'nanoid';
import PHOTOURL from '../../constants/photosBasicUrl';
import './SearchPageCard.css';

function SearchPageCard({
  posterPath,
  profilePath,
  title,
  name,
  releaseDate,
  firstAirDate,
  overview,
  knownFor,
  knownForDepartment,
}) {
  return (
    <Box className="searchCardContainer">
      {posterPath || profilePath
        ? (
          <img
            className="searchCardImage"
            src={`${PHOTOURL}${posterPath || profilePath}`}
            alt={title}
          />
        )
        : (
          <Box className="noImageContainer">
            <NoPhotographyIcon className="searchCardNoImage" />
          </Box>
        )}
      <Box className="searchCardDescription">
        <Typography variant="h6" className="searchCardTitle">
          {title || name}
        </Typography>
        {releaseDate || firstAirDate
          ? (
            <Typography className="searchCard subtitle">
              {releaseDate || firstAirDate}
            </Typography>
          )
          : (
            <Typography className="searchCard subtitle">
              {knownForDepartment}
            </Typography>
          )}
        {overview
          ? (
            <Typography className="searchCardOverView">
              {overview}
            </Typography>
          )
          : (
            <Typography className="searchCardOverView">
              {knownFor.map((movie) => <span key={nanoid()}>{movie.title}</span>)}
            </Typography>
          )}
      </Box>
    </Box>
  );
}

SearchPageCard.propTypes = {
  posterPath: PropTypes.string,
  profilePath: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  firstAirDate: PropTypes.string,
  knownFor: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ),
  knownForDepartment: PropTypes.string,
};

SearchPageCard.defaultProps = {
  title: '',
  name: '',
  posterPath: '',
  profilePath: '',
  overview: '',
  releaseDate: '',
  firstAirDate: '',
  knownFor: [{
    title: '',
  }],
  knownForDepartment: '',
};

export default SearchPageCard;
