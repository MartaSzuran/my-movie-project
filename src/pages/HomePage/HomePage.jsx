import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CaruselPopularMovies from '../../components/CaruselPopularMovies/CaruselPopularMovies';
import { selectAllMovies, fetchPopularData } from '../../redux/slices/moviesSlice';
import switchTitlesPopularity from '../../constants/switchTitlesPopularity';

export default function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  const [switchTitle, setSwitchTitle] = useState(switchTitlesPopularity[0].name);

  const handleSwitchTitleChange = (event, newTitleValue) => {
    setSwitchTitle(newTitleValue);
  };

  useEffect(() => {
    dispatch(fetchPopularData(switchTitlesPopularity[0].type));
  }, [dispatch]);

  const myCastomInfoMovies = movies.map((movie) => ({
    posterPath: movie.poster_path,
    title: movie.title,
    releaseDate: movie.release_date,
    voteAverage: movie.vote_average,
  }));

  return (
    <div>
      <CaruselPopularMovies
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
        movies={myCastomInfoMovies}
      />
    </div>
  );
}
