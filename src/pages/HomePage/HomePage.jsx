import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carusel from '../../components/Carusel/Carusel';
import { selectAllMovies, fetchPopularMovies } from '../../redux/slices/moviesSlice';
import switchTitlesPopularity from '../../constants/switchTitlesPopularity';

export default function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  const [switchTitle, setSwitchTitle] = useState(switchTitlesPopularity[0].name);

  const handleSwitchTitleChange = (event, newTitleValue) => {
    setSwitchTitle(newTitleValue);
  };

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div>
      <Carusel
        caruselTitle="What's popular?"
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
        switchTitlesPopularity={switchTitlesPopularity}
      />
    </div>
  );
}
