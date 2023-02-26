import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import './ErrorPage.css';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Box className="errorPageContainer">
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">Page not found!</Typography>
      <Box className="acitonElementContainer">
        <Button onClick={() => navigate('/')} className="homePageBackButton style">⇦ home page</Button>
        <Button onClick={() => navigate(-1)} className="homePageBackButton style">⇦ previous page</Button>
      </Box>
    </Box>
  );
}
