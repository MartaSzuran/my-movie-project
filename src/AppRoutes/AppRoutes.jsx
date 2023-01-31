import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MoviePage from '../pages/MoviePage/MoviePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/search/movie/:movieId" element={<MoviePage />} />
    </Routes>
  );
}
