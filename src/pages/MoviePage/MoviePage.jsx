import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMovieData } from '../../queries';

export default function MoviePage() {
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieData(movieId);
  });

  return (
    <div>Movie Page</div>
  );
}
