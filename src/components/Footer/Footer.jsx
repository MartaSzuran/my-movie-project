import TheatersTwoToneIcon from '@mui/icons-material/TheatersTwoTone';
import { Box } from '@mui/material';
import './Footer.css';

export default function Footer() {
  return (
    <Box className="mainFooterContainerStyle">
      <TheatersTwoToneIcon style={{ fontSize: '140px' }} />
      <table>
        <thead className="footerTableHeaderStyle">
          <tr>
            <th>THE BASICS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="footerTableBodyStyle">
            <td>About TMDB</td>
            <td>Contact Us</td>
            <td>Support Forums</td>
            <td>API</td>
            <td>System Status</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead className="footerTableHeaderStyle">
          <tr>
            <th>GET INVOLVED</th>
          </tr>
        </thead>
        <tbody>
          <tr className="footerTableBodyStyle">
            <td>Contribution Bible</td>
            <td>Add New Movie</td>
            <td>Add New TV Show</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}
