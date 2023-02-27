import { Box, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { PHOTO_URL } from '../../constants/photosBasicUrl';
import { MOVIES } from '../../constants/searchTypes';
import './FavoriteMovieCard.css';

function FavoriteMovieCard({
  movieId,
  poster,
  title,
  releaseDate,
}) {
  const navigate = useNavigate();

  const handleOnClickMovieCard = () => {
    navigate(`/${MOVIES}/${movieId}`);
  };

  return (
    <Box className="favoriteMovieCardConatiner" onClick={handleOnClickMovieCard}>
      <Box className="favoriteCardImageContainer">
        {poster
          ? (
            <img
              className="favoriteCardImage"
              src={`${PHOTO_URL}${poster}`}
              alt={title}
            />
          )
          : (
            <Box className="noImageFavoriteCardContainer">
              <NoPhotographyIcon className="favoriteCardNoImage style" />
            </Box>
          )}
      </Box>
      <Box className="favoriteCardHeader">
        <Typography className="favoriteCardHeaderTitle style">{title}</Typography>
        <Typography className="favoriteCardHeaderDate style">{`(${releaseDate})`}</Typography>
      </Box>
    </Box>
  );
}

FavoriteMovieCard.propTypes = {
  movieId: PropTypes.string.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

FavoriteMovieCard.defaultProps = {
  poster: '',
};

export default FavoriteMovieCard;
