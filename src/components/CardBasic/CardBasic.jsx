import { PropTypes } from 'prop-types';
import { Box, Typography } from '@mui/material';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import PHOTOURL from '../../constants/photosBasicUrl';
import 'react-circular-progressbar/dist/styles.css';
import './CardBasic.css';

function CardBasic({
  posterPath,
  title,
  releaseDate,
  voteAverage,
}) {
  const checkPopularityValue = () => {
    const percentagePopularityValue = Math.round(voteAverage * 10);
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
    <Box className="basicCardStyle">
      <img
        className="cardImage"
        src={`${PHOTOURL}${posterPath}`}
        alt={title}
      />
      <Box className="circularProgressContainer">
        {checkPopularityValue()}
      </Box>
      <Box className="cardDescription">
        <Typography variant="h8" className="cardTitle">{title}</Typography>
        <Typography className="cardReleaseDate">{releaseDate}</Typography>
      </Box>
    </Box>
  );
}

CardBasic.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
};

CardBasic.defaultProps = {
  posterPath: '',
  title: '',
  releaseDate: '',
  voteAverage: 0,
};

export default CardBasic;
