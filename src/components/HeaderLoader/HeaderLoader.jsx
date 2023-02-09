import { Skeleton, Box } from '@mui/material';
import './HeaderLoader.css';

export default function HeaderLoader() {
  return (
    <Box className="headerLoaderContainer">
      <Skeleton variant="rounded" height={90} fitContent />
    </Box>
  );
}
