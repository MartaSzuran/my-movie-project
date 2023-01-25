import { Box, Typography, Input } from '@mui/material';
import { PropTypes } from 'prop-types';
import './TitleHeader.css';

function TitleHeader({ searchQuery, setSearchQuery, onClickSearchButton }) {
  return (
    <Box className="titleHeaderStyle">
      <Typography variant="h4">Welcome.</Typography>
      <Typography variant="h5">Milions of movies, Tv shows and people to discover. Explore now.</Typography>
      <Box className="titleHeaderSearchContainerStyle">
        <Input
          placeholder="Search for a movie, TV Show, person ..."
          value={searchQuery}
          onChange={({ target: { value } }) => setSearchQuery(value)}
          className="searchInput titleHeader"
        />
        <button
          type="button"
          className="titleHeaderButtonSearchStyle"
          onClick={onClickSearchButton}
          disabled={!searchQuery}
        >
          Search
        </button>
      </Box>
    </Box>
  );
}

TitleHeader.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  onClickSearchButton: PropTypes.func.isRequired,
};

TitleHeader.defaultProps = {
  searchQuery: '',
};

export default TitleHeader;
