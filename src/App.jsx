import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes/AppRoutes';
import MainHeader from './components/MainHeader/MainHeader';
import TitleHeader from './components/TitleHeader/TitleHeader';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const onClickSearchButton = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div>
      <MainHeader />
      <TitleHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onClickSearchButton={onClickSearchButton}
      />
      <div className="mainContainer">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
