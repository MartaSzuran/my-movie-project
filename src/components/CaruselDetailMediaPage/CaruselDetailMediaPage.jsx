import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import CardDetailPageCarusel from '../CardDetailPageCarusel/CardDetailPageCarusel';
import './CaruselDetailMediaPage.css';

function CaruselDetailMediaPage({ topCast }) {
  return (
    <>
      <Typography className="caruselHeader style">Top Billed Cast</Typography>
      <Box className="caruselBody">
        {topCast.map(({
          id,
          name,
          character,
          profile_path: profilePath,
        }) => (
          <CardDetailPageCarusel
            key={id}
            name={name}
            character={character}
            profilePath={profilePath}
          />
        ))}
        <Box className="redirectionCardContainer">
          <Typography className="redirectionDetailCaruselCard style">View More ➜</Typography>
        </Box>
      </Box>
      <Typography className="redirectionDetailCaruselFooter style">Full Cast & Crew</Typography>
    </>
  );
}

CaruselDetailMediaPage.propTypes = {
  topCast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ).isRequired,
};

export default CaruselDetailMediaPage;
