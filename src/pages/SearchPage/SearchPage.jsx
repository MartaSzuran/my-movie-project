import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DebounceInput } from 'react-debounce-input';
import ClearIcon from '@mui/icons-material/Clear';
import { fetchSearchData, selectAllSeachData } from '../../redux/slices/searchDataSlice';
import {
  MOVIES,
  PEOPLE,
  TV,
  searchTypesArray,
} from '../../constants/searchTypes';
import './SearchPage.css';

export default function SearchPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchData = useSelector(selectAllSeachData);

  const { query } = queryString.parse(window.location.search);
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchType, setSearchType] = useState(MOVIES);

  const handleOnChangeInputSearchField = ({ target: { value } }) => {
    setSearchQuery(value);
    navigate(`/search?query=${searchQuery}`);
  };

  const handleOnClick = (id) => {
    if (id === 'Tv') {
      return setSearchType(TV);
    }
    if (id === 'Person') {
      return setSearchType(PEOPLE);
    }
    return setSearchType(MOVIES);
  };

  useEffect(() => {
    dispatch(fetchSearchData({ searchQuery, searchType }));
  }, [searchQuery, searchType]);

  return (
    <Box className="searchPageContainer">
      <Box className="searchInputTitle">
        <Box className="searchleft">
          <SearchIcon />
          <DebounceInput
            value={searchQuery}
            onChange={handleOnChangeInputSearchField}
            debounceTimeout={300}
            id="searchInput"
          />
        </Box>
        <Button className="searchPage clearButton">
          <ClearIcon />
        </Button>
      </Box>
      <Box className="mainContentContainer">
        <Box className="searchResultsManu">
          <Typography variant="h5" className="resultsMenu header">Search Results</Typography>
          {searchTypesArray.map((type) => (
            <Button
              key={type}
              id={type}
              onClick={({ target: { id } }) => handleOnClick(id)}
              className="resultsMenu button"
            >
              {type}
            </Button>
          ))}
        </Box>
        <Box className="searchResultsContainer">
          my cards
        </Box>
      </Box>
    </Box>
  );
}
