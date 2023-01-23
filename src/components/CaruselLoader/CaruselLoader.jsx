import { Box, Skeleton } from '@mui/material';
import { nanoid } from 'nanoid';
import './CaruselLoader.css';

export default function CaruselLoader() {
  const skeletonArray = new Array(7).fill(
    <Box className="skeletonContainer">
      <Skeleton variant="rounded" width={156} height={240} />
      <Skeleton variant="rounded" width={156} height={25} />
      <Skeleton variant="rounded" width={156} height={25} />
    </Box>,
  );
  return (
    skeletonArray.map((skeleton) => <div key={nanoid()}>{skeleton}</div>)
  );
}
