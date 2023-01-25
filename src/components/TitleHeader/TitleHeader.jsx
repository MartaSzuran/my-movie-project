import { Box, Typography, Input } from '@mui/material';
import { PropTypes } from 'prop-types';
import './TitleHeader.css';

function TitleHeader({ searchQuery, setSearchQuery, handleClickSearchButton }) {
  const handleInputOnChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  return (
    <Box className="titleHeaderStyle">
      <Typography variant="h4">Welcome.</Typography>
      <Typography variant="h5">Milions of movies, Tv shows and people to discover. Explore now.</Typography>
      <Box className="titleHeaderSearchContainerStyle">
        <Input
          placeholder="Search for a movie, TV Show, person ..."
          value={searchQuery}
          onChange={handleInputOnChange}
          className="searchInput titleHeader"
        />
        <button type="button" className="titleHeaderButtonSearchStyle" onClick={handleClickSearchButton}>
          Search
        </button>
      </Box>
    </Box>
  );
}

TitleHeader.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  handleClickSearchButton: PropTypes.func.isRequired,
};

TitleHeader.defaultProps = {
  searchQuery: '',
};

export default TitleHeader;
