import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import useFetchDataDetails from '../../hooks/useFetchDataDetails';
import DetailPagesHeader from '../../components/DetailPagesHeader/DetailPagesHeader';
import DetailPageLoader from '../../components/DetailPageLoader/DetailPageLoader';
import { MOVIES } from '../../constants/searchTypes';
import './MoviePage.css';

export default function MoviePage() {
  const { movieId } = useParams();

  const { mediaData, isLoading, isError } = useFetchDataDetails(MOVIES, movieId);
  const {
    title,
    tagline,
    backdrop_path: imagePath,
    poster_path: poster,
    genres,
    overview,
    release_date: releaseDate,
    popularity,
    runtime,
    production_countries: productionCoutries,
  } = mediaData;
  return (
    <Box>
      {!isLoading
        ? (
          <DetailPagesHeader
            title={title}
            tagline={tagline}
            imagePath={imagePath}
            poster={poster}
            genres={genres}
            overview={overview}
            releaseDate={releaseDate}
            popularity={popularity}
            runtime={runtime}
            productionCoutries={productionCoutries}
          />
        )
        : <DetailPageLoader />}
    </Box>
  );
}
