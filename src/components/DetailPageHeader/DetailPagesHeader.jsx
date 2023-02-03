import { Box, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { MEDIUM_PHOTO_URL, BIG_PHOTO_URL } from '../../constants/photosBasicUrl';
import 'react-circular-progressbar/dist/styles.css';
import './DetailPagesHeader.css';

function DetailPagesHeader({
  title,
  tagline,
  imagePath,
  poster,
  genres,
  overview,
  releaseDate,
  popularity,
  runtime,
  mediaDirector,
}) {
  const customizeRuntime = () => {
    const runtimeHoures = Math.floor(runtime / 60);
    const runtimeMinutes = runtime % 60;
    return `${runtimeHoures}h ${runtimeMinutes}m`;
  };

  const checkPopularityValue = () => {
    const percentagePopularityValue = Math.round(popularity);
    if (percentagePopularityValue >= 70) {
      return (
        <CircularProgressbar
          value={percentagePopularityValue}
          text={`${percentagePopularityValue}%`}
          styles={buildStyles({
            textColor: 'var(--darker-white)',
            pathColor: 'var(--light-green)',
            trailColor: 'var(--dark-grey)',
            textSize: '30px',
          })}
        />
      );
    }
    if (percentagePopularityValue < 70 && percentagePopularityValue >= 30) {
      return (
        <CircularProgressbar
          value={percentagePopularityValue}
          text={`${percentagePopularityValue}%`}
          styles={buildStyles({
            textColor: 'var(--darker-white)',
            pathColor: 'var(--light-yellow)',
            trailColor: 'var(--dark-grey)',
            textSize: '30px',
          })}
        />
      );
    }
    return (
      <CircularProgressbar
        value={percentagePopularityValue}
        text={`${percentagePopularityValue}%`}
        styles={buildStyles({
          textColor: 'var(--darker-white)',
          pathColor: 'var(--dark-pink)',
          trailColor: 'var(--dark-grey)',
          textSize: '30px',
        })}
      />
    );
  };

  return (
    <Box
      className="detailHeaderContainer"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, -1), rgba(0, 0, 0, 0.8)), url(${BIG_PHOTO_URL}${imagePath})`,
      }}
    >
      <img
        src={`${MEDIUM_PHOTO_URL}${poster}`}
        alt={title}
        className="detailHeaderImage"
      />
      <Box className="dataDetailHeader">
        <Typography className="headerStyle title">{title}</Typography>
        <Box className="dataFacts">
          <Typography>
            {releaseDate}
            {' '}
            •
          </Typography>
          <Typography>
            {genres.map((genre) => (
              <span key={genre.id}>
                {' '}
                {genre.name}
              </span>
            ))}
          </Typography>
          <Typography>
            •
            {' '}
            {customizeRuntime()}
          </Typography>
        </Box>
        <Box className="iconsHeaderContainer">
          <Box className="circularHeaderProgressContainer">
            {checkPopularityValue()}
          </Box>
          <Typography>
            User
            <br />
            Score
          </Typography>
          <Box className="iconActionContainer">
            <Box className="singleIcon">
              <ViewListRoundedIcon className="addToListIcon Header" />
            </Box>
          </Box>
          <Box className="iconActionContainer">
            <Box className="singleIcon">
              <FavoriteRoundedIcon className="addToListIcon Header" />
            </Box>
          </Box>
          <Box className="iconActionContainer">
            <Box className="singleIcon">
              <BookmarkAddRoundedIcon className="addToListIcon Header" />
            </Box>
          </Box>
          <Box className="iconActionContainer">
            <Box className="singleIcon">
              <GradeRoundedIcon />
            </Box>
          </Box>
        </Box>
        <Typography className="detailsTagline">{tagline}</Typography>
        <Typography variant="h6">Overview</Typography>
        <Typography>{overview}</Typography>
        <Box className="directorInfo">
          <Typography className="directorName style">{mediaDirector}</Typography>
          <Typography className="profession style">Director</Typography>
        </Box>
      </Box>
    </Box>
  );
}

DetailPagesHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  imagePath: PropTypes.string,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  popularity: PropTypes.number,
  runtime: PropTypes.number,
  mediaDirector: PropTypes.string,
};

DetailPagesHeader.defaultProps = {
  title: '',
  tagline: '',
  imagePath: '',
  poster: '',
  genres: [{
    name: '',
  }],
  overview: '',
  releaseDate: '',
  popularity: 0,
  runtime: 0,
  mediaDirector: '',
};

export default DetailPagesHeader;
