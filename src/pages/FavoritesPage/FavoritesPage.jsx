import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { useFetchServerFavoritesList } from '../../reactQuery/hooks/index';
import FavoriteMovieCard from '../../components/FavoriteMovieCard/FavoriteMovieCard';
import FavoritesMoviesCardsLoader from '../../components/FavoritesMoviesCardsLoader/FavoritesMoviesCardsLoader';
import './FavoritesPage.css';

export default function FavoritesPage() {
  const navigate = useNavigate();

  const {
    serverFavoritesList,
    isLoadingServerFavoritesList,
  } = useFetchServerFavoritesList();

  const favoritesMoviesCardGenerator = () => {
    if (serverFavoritesList.length) {
      return serverFavoritesList.map((movie) => {
        const {
          movieId,
          title,
          poster,
          releaseDate,
        } = movie;
        return (
          <FavoriteMovieCard
            key={movieId}
            movieId={movieId}
            poster={poster}
            title={title}
            releaseDate={releaseDate}
          />
        );
      });
    }
    return (
      <Box className="emptyFavoritesMovieArray">
        <Typography variant="h5">No favorites movies yet!</Typography>
        <Button onClick={() => navigate('/')} className="homePageBackButton style">⇦ home page</Button>
      </Box>
    );
  };

  return (
    <Box className="favoritesMoviesContainer">
      <Typography variant="h2" className="favoritesMoviesHeader style">Favorites movies</Typography>
      <Box className="favortiesMoviesCardsConatiner">
        {isLoadingServerFavoritesList
          ? <FavoritesMoviesCardsLoader />
          : favoritesMoviesCardGenerator()}
      </Box>
    </Box>
  );
}
