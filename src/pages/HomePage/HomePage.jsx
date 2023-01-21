import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CaruselPopular from '../../components/CaruselPopular/CaruselPopular';
import { selectAllMovies, fetchPopularData } from '../../redux/slices/moviesSlice';
import { switchMoviesTitle, switchOnTvTitle } from '../../constants/switchTitlesPopularity';

export default function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  const [switchTitle, setSwitchTitle] = useState(switchMoviesTitle.name);

  const handleSwitchTitleChange = (_, newTitleValue) => {
    setSwitchTitle(newTitleValue);
    checkNewSwitchType(newTitleValue);
  };

  const checkNewSwitchType = (newTitleValue) => {
    if (newTitleValue === switchOnTvTitle.name) {
      return dispatch(fetchPopularData(switchOnTvTitle.type));
    }
    return dispatch(fetchPopularData(switchMoviesTitle.type));
  };

  useEffect(() => {
    dispatch(fetchPopularData(switchMoviesTitle.type));
  }, []);

  return (
    <div>
      <CaruselPopular
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
        movies={movies}
      />
    </div>
  );
}
