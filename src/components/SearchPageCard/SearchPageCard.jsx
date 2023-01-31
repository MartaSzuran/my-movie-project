import { PropTypes } from 'prop-types';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { nanoid } from 'nanoid';
import PHOTOURL from '../../constants/photosBasicUrl';
import './SearchPageCard.css';

function SearchPageCard({
  id,
  imagePath,
  title,
  releaseDate,
  overview,
  knownFor,
  knownForDepartment,
  searchType,
}) {
  return (
    <Link to={`${searchType}/${id}`}>
      <Box className="searchCardContainer">
        {imagePath
          ? (
            <img
              className="searchCardImage"
              src={`${PHOTOURL}${imagePath}`}
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
            {title}
          </Typography>
          {releaseDate
            ? (
              <Typography className="searchCard subtitle">
                {releaseDate}
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
                {knownFor.map((movie) => (
                  <span key={nanoid()}>
                    ••
                    {movie.title}
                  </span>
                ))}
              </Typography>
            )}
        </Box>
      </Box>
    </Link>
  );
}

SearchPageCard.propTypes = {
  id: PropTypes.number,
  imagePath: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  knownFor: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ),
  knownForDepartment: PropTypes.string,
  searchType: PropTypes.string,
};

SearchPageCard.defaultProps = {
  id: 0,
  title: '',
  imagePath: '',
  overview: '',
  releaseDate: '',
  knownFor: [{
    title: '',
  }],
  knownForDepartment: '',
  searchType: '',
};

export default SearchPageCard;
