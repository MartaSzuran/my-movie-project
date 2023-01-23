import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CaruselPopular from '../../components/CaruselPopular/CaruselPopular';
import { selectAllPopularCaruselData, fetchPopularCaruselData } from '../../redux/slices/popularDataSlice';
import { switchMoviesTitle, switchOnTvTitle } from '../../constants/switchTitlesPopularity';

export default function HomePage() {
  const dispatch = useDispatch();
  const dataCaruselPopular = useSelector(selectAllPopularCaruselData);

  const [switchTitle, setSwitchTitle] = useState(switchMoviesTitle.name);
  const [switchTitleType, setSwitchTitleType] = useState(switchMoviesTitle.type);

  const handleSwitchTitleChange = (_, newTitleValue) => {
    setSwitchTitle(newTitleValue);
    checkNewSwitchType(newTitleValue);
  };

  const checkNewSwitchType = (newTitleValue) => {
    if (newTitleValue === switchOnTvTitle.name) {
      return setSwitchTitleType(switchOnTvTitle.type);
    }
    return setSwitchTitleType(switchMoviesTitle.type);
  };

  useEffect(() => {
    dispatch(fetchPopularCaruselData(switchTitleType));
  }, [switchTitleType]);

  return (
    <div>
      <CaruselPopular
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
        dataPopular={dataCaruselPopular}
      />
    </div>
  );
}
