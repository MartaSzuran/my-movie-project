import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchData } from './redux/slices/searchDataSlice';
import AppRoutes from './AppRoutes/AppRoutes';
import { MOVIES } from './constants/searchTypes';
import MainHeader from './components/MainHeader/MainHeader';
import TitleHeader from './components/TitleHeader/TitleHeader';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const searchType = MOVIES;
  const [searchQuery, setSearchQuery] = useState('');

  const handleClickSearchButton = () => {
    dispatch(fetchSearchData({ searchQuery, searchType }));
  };

  return (
    <div>
      <MainHeader />
      <TitleHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleClickSearchButton={handleClickSearchButton}
      />
      <div className="mainContainer">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
