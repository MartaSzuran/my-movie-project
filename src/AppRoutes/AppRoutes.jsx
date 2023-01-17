import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/movies" element={<MoviesPage />} />
    </Routes>
  );
}
