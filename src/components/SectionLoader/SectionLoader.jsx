import { Box, Skeleton } from '@mui/material';
import './SectionLoader.css';

export default function SectionLoader() {
  return (
    <Box className="sectionLoaderContainer">
      <Box className="avatarLoader">
        <Skeleton variant="circular" width={60} height={60} />
      </Box>
      <Box className="contentLoader">
        <Skeleton variant="rounded" width={250} height={30} />
        <Skeleton variant="rounded" width={820} height={200} />
      </Box>
    </Box>
  );
}
