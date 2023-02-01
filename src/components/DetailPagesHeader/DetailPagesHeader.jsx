import { Box, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { PHOTOURL, BIGPHOTOURL } from '../../constants/photosBasicUrl';
import 'react-circular-progressbar/dist/styles.css';
import './DetailPagesHeader.css';

function DetailPagesHeader({
  title,
  imagePath,
  poster,
  genres,
  overview,
  releaseDate,
  popularity,
  runtime,
  productionCoutries,
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
    <Box className="detailHeaderContainer" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BIGPHOTOURL}${imagePath})` }}>
      <img
        src={`${PHOTOURL}${poster}`}
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
              <span key={nanoid()}>
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
          <Typography>{'User \n Score'}</Typography>
          <PlaylistAddRoundedIcon className="addToListIcon Header" />
        </Box>
      </Box>
    </Box>
  );
}

DetailPagesHeader.propTypes = {
  title: PropTypes.string,
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
  productionCoutries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};

DetailPagesHeader.defaultProps = {
  title: '',
  imagePath: '',
  poster: '',
  genres: [{
    name: '',
  }],
  overview: '',
  releaseDate: '',
  popularity: 0,
  runtime: 0,
  productionCoutries: [{
    name: '',
  }],
};

export default DetailPagesHeader;
