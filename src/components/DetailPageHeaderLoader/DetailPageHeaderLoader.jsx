import { Box, Skeleton } from '@mui/material';
import './DetailPageHeaderLoader.css';

export default function DetailPageHeaderLoader() {
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
