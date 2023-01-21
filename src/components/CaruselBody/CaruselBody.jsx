import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import CardBasic from '../CardBasic/CardBasic';
import { switchMoviesTitle } from '../../constants/switchTitlesPopularity';
import './CaruselBody.css';

function CaruselBody({ dataPopular, switchTitle }) {
  return (
    <Box className="caruselBody">
      {switchTitle === switchMoviesTitle.name
        ? dataPopular.map(({
          id,
          poster_path: posterPath,
          title,
          release_date: releaseDate,
          vote_average: voteAverage,
        }) => (
          <CardBasic
            key={id}
            posterPath={posterPath}
            title={title}
            releaseDate={releaseDate}
            voteAverage={voteAverage}
          />
        ))
        : dataPopular.map(({
          id,
          poster_path: posterPath,
          name,
          first_air_date: releaseDate,
          vote_average: voteAverage,
        }) => (
          <CardBasic
            key={id}
            posterPath={posterPath}
            title={name}
            releaseDate={releaseDate}
            voteAverage={voteAverage}
          />
        ))}
    </Box>
  );
}

CaruselBody.propTypes = {
  switchTitle: PropTypes.string,
  dataPopular: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      release_date: PropTypes.string,
      first_air_date: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
};

CaruselBody.defaultProps = {
  switchTitle: '',
  dataPopular: [{
    title: '',
    name: '',
    release_date: '',
    first_air_date: '',
    vote_average: 0,
  }],
};

export default CaruselBody;
