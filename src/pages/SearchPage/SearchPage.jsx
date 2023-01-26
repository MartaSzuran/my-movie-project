import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchSearchData, selectAllSeachData } from '../../redux/slices/searchDataSlice';
import { MOVIES, PEOPLE, TV } from '../../constants/searchTypes';
import './SearchPage.css';

export default function SearchPage() {
  const dispatch = useDispatch();
  const searchData = useSelector(selectAllSeachData);
  const { query } = queryString.parse(window.location.search);
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchType, setSearchType] = useState(MOVIES);

  useEffect(() => {
    dispatch(fetchSearchData({ searchQuery, searchType }));
  }, [searchQuery, searchType]);

  return (<div>Search Page</div>);
}
