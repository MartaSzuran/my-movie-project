import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CaruselPopular from '../../components/CaruselPopular/CaruselPopular';
import { selectAllMovies, fetchPopularData } from '../../redux/slices/moviesSlice';
import { switchTitlesPopularity, switchTitlesPopularityDefault } from '../../constants/switchTitlesPopularity';

export default function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  const [switchTitle, setSwitchTitle] = useState(switchTitlesPopularityDefault.name);

  const handleSwitchTitleChange = (_, newTitleValue) => {
    setSwitchTitle(newTitleValue);
    checkNewSwitchType(newTitleValue);
  };

  const checkNewSwitchType = (newTitleValue) => {
    if (newTitleValue === 'On Tv') {
      return dispatch(fetchPopularData(switchTitlesPopularity[1].type));
    }
    return dispatch(fetchPopularData(switchTitlesPopularity[0].type));
  };

  useEffect(() => {
    dispatch(fetchPopularData(switchTitlesPopularity[0].type));
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
