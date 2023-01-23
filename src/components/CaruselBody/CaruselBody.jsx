import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import CardBasic from '../CardBasic/CardBasic';
import { switchMoviesTitle } from '../../constants/switchTitlesPopularity';
import CaruselLoader from '../CaruselLoader/CaruselLoader';
import './CaruselBody.css';

function CaruselBody({ dataPopular, switchTitle }) {
  const caruselLoading = useSelector((state) => state.popularData.isLoading);

  const checkPopularDataType = () => {
    if (switchTitle === switchMoviesTitle.name) {
      return (
        dataPopular.map(({
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
      );
    }
    return (
      dataPopular.map(({
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
      ))
    );
  };

  return (
    <Box className="caruselBody">
      {caruselLoading
        ? <CaruselLoader />
        : checkPopularDataType()}
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
