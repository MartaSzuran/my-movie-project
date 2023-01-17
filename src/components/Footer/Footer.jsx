import TheatersTwoToneIcon from '@mui/icons-material/TheatersTwoTone';
import { Box } from '@mui/material';
import FooterTables from '../FooterTables/FooterTables';
import './Footer.css';

export default function Footer() {
  return (
    <Box className="mainFooterContainerStyle">
      <TheatersTwoToneIcon style={{ fontSize: '140px', color: '#18b8db' }} />
      <FooterTables />
    </Box>
  );
}
