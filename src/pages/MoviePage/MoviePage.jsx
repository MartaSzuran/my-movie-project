import { useParams } from 'react-router-dom';
import useFetchDataDetails from '../../hooks/useFetchDataDetails';
import { MOVIES } from '../../constants/searchTypes';

export default function MoviePage() {
  const { movieId } = useParams();

  const { movieData, isLoading, error } = useFetchDataDetails(MOVIES, movieId);
  return (
    <div>Movie Page</div>
  );
}
