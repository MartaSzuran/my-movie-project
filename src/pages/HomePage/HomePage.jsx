import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllMovies, fetchPopularMovies } from '../../redux/slices/moviesSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div>
      <h3>What is popular?</h3>
    </div>
  );
}
