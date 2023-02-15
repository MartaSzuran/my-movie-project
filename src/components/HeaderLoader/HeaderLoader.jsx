import { Skeleton, Box } from '@mui/material';

export default function HeaderLoader() {
  return (
    <Box>
      <Skeleton variant="rounded" height={90} width={1800} />
    </Box>
  );
}
