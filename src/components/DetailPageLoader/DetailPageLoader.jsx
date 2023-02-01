import { Box, Skeleton } from '@mui/material';
import './DetailPageLoader.css';

export default function DetailPageLoader() {
  return (
    <Box className="loaderContainer">
      <Skeleton variant="rounded" animation="wave" height={200} />
      <Box className="inlineLoaders">
        <Skeleton animation="wave" height={100} width={300} />
        <Skeleton animation="wave" height={100} width={300} />
        <Skeleton animation="wave" height={100} width={300} />
      </Box>
    </Box>
  );
}
