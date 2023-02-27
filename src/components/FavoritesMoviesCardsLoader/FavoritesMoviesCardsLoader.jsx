import { Box, Skeleton } from '@mui/material';
import { nanoid } from 'nanoid';
import './FavoritesMoviesCardsLoader.css';

export default function FavoritesMoviesCardsLoader() {
  const favoritesCardsLoaderArray = new Array(5).fill(
    <Box className="favoritesMoviesLoaderContainer">
      <Skeleton variant="rounded" width={200} height={260} />
      <Skeleton variant="rounded" width={200} height={30} />
    </Box>,
  );

  return (
    favoritesCardsLoaderArray.map((cardLoader) => <div key={nanoid()}>{cardLoader}</div>)
  );
}
