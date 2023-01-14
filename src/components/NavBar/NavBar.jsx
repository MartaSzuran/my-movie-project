import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { Box } from '@mui/material';
import TheatersTwoToneIcon from '@mui/icons-material/TheatersTwoTone';
import './NavBar.css';

export default function NavBar() {
  return (
    <Box className="navBarStyle">
      <Box className="leftSideNavBarStyles">
        <Link to="/">
          <TheatersTwoToneIcon className="movieIcon" />
        </Link>
        <Link to="/movies">Movies</Link>
      </Box>
      <DebounceInput
        placeholder="..."
        debounceTimeout={300}
        id="searchInputStyle"
      />
    </Box>
  );
}
