import { PropTypes } from 'prop-types';
import moment from 'moment';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { nanoid } from 'nanoid';
import { PHOTO_URL } from '../../constants/photosBasicUrl';
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
  const navigate = useNavigate();
  const handleOnSearchCardClick = () => {
    navigate(`/${searchType}/${id}`);
  };

  return (
    <Box className="searchCardContainer" onClick={handleOnSearchCardClick}>
      {imagePath
        ? (
          <img
            className="searchCardImage"
            src={`${PHOTO_URL}${imagePath}`}
            alt={title}
          />
        )
        : (
          <Box className="noImageContainer">
            <NoPhotographyIcon className="searchCardNoImage" />
          </Box>
        )}
      <Box className="searchCardDescription">
        <Typography variant="h6" className="searchCardTitle style">
          {title}
        </Typography>
        {releaseDate
          ? (
            <Typography className="searchCard subtitle">
              {`${moment(releaseDate).format('MMMM D, YYYY')}`}
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
