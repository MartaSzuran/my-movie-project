import { DebounceInput } from 'react-debounce-input';
import { Box, Typography } from '@mui/material';
import './TitleHeader.css';

export default function TitleHeader() {
  return (
    <Box className="titleHeaderStyle">
      <Typography variant="h4">Welcome.</Typography>
      <Typography variant="h5">Milions of movies, Tv shows and people to discover. Explore now.</Typography>
      <Box className="titleHeaderSearchContainerStyle">
        <DebounceInput
          placeholder="Search for a movie, TV Show, person ..."
          debounceTimeout={300}
          id="searchInputStyle"
        />
        <button type="button" className="titleHeaderButtonSearchStyle">
          Search
        </button>
      </Box>
    </Box>
  );
}
