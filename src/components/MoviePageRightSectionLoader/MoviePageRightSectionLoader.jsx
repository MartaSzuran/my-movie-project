import { Box, Skeleton } from '@mui/material';
import { nanoid } from 'nanoid';
import './MoviePageRightSectionLoader.css';

export default function MoviePageRightSectionLoader() {
  const moviePageRigthSectionLoadersArray = new Array(12).fill(
    <Box className="rigthSectionLoader">
      <Skeleton variant="rounded" width={180} height={20} className="rightSectionSkeleton style" />
    </Box>,
  );

  return (
    moviePageRigthSectionLoadersArray.map((loader) => <div key={nanoid()}>{loader}</div>)
  );
}
