import { Box, Skeleton } from '@mui/material';
import './CaruselLoader.css';

export default function CaruselLoader() {
  const skeletonGenerator = () => {
    const skeletonsArray = [];
    for (let i = 0; i < 5; i += 1) {
      skeletonsArray.push(
        <Box key={i} className="skeletonContainer">
          <Skeleton variant="rounded" width={156} height={240} />
          <Skeleton variant="rounded" width={156} height={25} />
          <Skeleton variant="rounded" width={156} height={25} />
        </Box>,
      );
    }
    return skeletonsArray;
  };

  return (
    <>
      {skeletonGenerator()}
    </>
  );
}
