import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CaruselPopular from '../../components/CaruselPopular/CaruselPopular';
import CaruselTrending from '../../components/CaruselTrending/CaruselTrending';
import { selectAllPopularCaruselData, fetchPopularCaruselData } from '../../redux/slices/popularDataSlice';
import { switchMoviesTitle, switchOnTvTitle } from '../../constants/switchTitlesPopularity';
import { selectAllTrendingCaruselData, fetchTrendingCaruselData } from '../../redux/slices/trendingDataSlice';
import { switchTrendingDayTitle, switchTrendingWeekTitle } from '../../constants/switchTitlesTrending';

export default function HomePage() {
  const dispatch = useDispatch();
  const dataCaruselPopular = useSelector(selectAllPopularCaruselData);
  const dataCaruselTrending = useSelector(selectAllTrendingCaruselData);

  const [switchTitle, setSwitchTitle] = useState(switchMoviesTitle.name);
  const [switchTitleType, setSwitchTitleType] = useState(switchMoviesTitle.type);

  const [switchTrendingTitle, setSwitchTrendingTitle] = useState(switchTrendingDayTitle.name);
  const [switchTrendingTitleType,
    setSwitchTrendingTitleType] = useState(switchTrendingDayTitle.type);

  const handleSwitchTitleChange = (_, newTitleValue) => {
    setSwitchTitle(newTitleValue);
    checkNewSwitchType(newTitleValue);
  };

  const handleSwitchTitleTrendingChange = (_, newTitleValue) => {
    setSwitchTrendingTitle(newTitleValue);
    checkNewSwitchTrendingType(newTitleValue);
  };

  const checkNewSwitchType = (newTitleValue) => {
    if (newTitleValue === switchOnTvTitle.name) {
      return setSwitchTitleType(switchOnTvTitle.type);
    }
    return setSwitchTitleType(switchMoviesTitle.type);
  };

  const checkNewSwitchTrendingType = (newTitleValue) => {
    if (newTitleValue === switchTrendingWeekTitle.name) {
      return setSwitchTrendingTitleType(switchTrendingDayTitle.type);
    }
    return setSwitchTrendingTitleType(switchTrendingWeekTitle.type);
  };

  useEffect(() => {
    dispatch(fetchPopularCaruselData(switchTitleType));
  }, [switchTitleType]);

  useEffect(() => {
    dispatch(fetchTrendingCaruselData(switchTrendingTitleType));
  }, [switchTrendingTitleType]);

  return (
    <div>
      <CaruselPopular
        switchTitle={switchTitle}
        handleSwitchTitleChange={handleSwitchTitleChange}
        dataPopular={dataCaruselPopular}
      />
      <CaruselTrending
        switchTrendingTitle={switchTrendingTitle}
        handleSwitchTitleTrendingChange={handleSwitchTitleTrendingChange}
        dataTrending={dataCaruselTrending}
      />
    </div>
  );
}
