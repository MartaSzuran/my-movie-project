import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
