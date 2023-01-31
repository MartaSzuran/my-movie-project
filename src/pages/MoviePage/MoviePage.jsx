import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { MOVIES } from '../../constants/searchTypes';

export default function MoviePage() {
  const { movieId } = useParams();

  const [movieData, status] = useFetch(MOVIES, movieId);
  return (
    <div>Movie Page</div>
  );
}
