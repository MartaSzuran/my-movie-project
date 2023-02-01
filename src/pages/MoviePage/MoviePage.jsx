import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import useFetchDataDetails from '../../hooks/useFetchDataDetails';
import DetailPagesHeader from '../../components/DetailPagesHeader/DetailPagesHeader';
import { MOVIES } from '../../constants/searchTypes';
import './MoviePage.css';

export default function MoviePage() {
  const { movieId } = useParams();

  const { data = [], isLoading, isError } = useFetchDataDetails(MOVIES, movieId);
  return (
    <Box>
      <DetailPagesHeader
        title={data.title}
        imagePath={data.backdrop_path}
        poster={data.poster_path}
        genres={data.genres}
        overview={data.overview}
        releaseDate={data.release_date}
        popularity={data.popularity}
        runtime={data.runtime}
        productionCoutries={data.production_countries}
      />
    </Box>
  );
}
