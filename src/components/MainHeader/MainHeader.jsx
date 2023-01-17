import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import TheatersTwoToneIcon from '@mui/icons-material/TheatersTwoTone';
import './MainHeader.css';

export default function MainHeader() {
  return (
    <Box className="mainHeaderStyle">
      <Box className="leftSideMainHeaderStyles">
        <Link to="/">
          <TheatersTwoToneIcon style={{ fontSize: '60px', color: '#18b8db' }} />
        </Link>
        <Link to="/movies" className="headerLinkStyle">Movies</Link>
        <p>TV Shows</p>
        <p>Poeple</p>
        <p>More</p>
      </Box>
    </Box>
  );
}
