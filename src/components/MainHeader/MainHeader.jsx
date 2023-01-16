import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import TheatersTwoToneIcon from '@mui/icons-material/TheatersTwoTone';
import './MainHeader.css';

export default function MainHeader() {
  return (
    <Box className="mainHeaderStyle">
      <Box className="leftSideMainHeaderStyles">
        <Link to="/">
          <TheatersTwoToneIcon style={{ fontSize: '60px' }} />
        </Link>
        <Link to="/movies">Movies</Link>
        <Typography variant="h5">TV Shows</Typography>
        <Typography variant="h5">Poeple</Typography>
        <Typography variant="h5">More</Typography>
      </Box>
    </Box>
  );
}
