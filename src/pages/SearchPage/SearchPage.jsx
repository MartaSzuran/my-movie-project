import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Input,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import SearchPageCard from '../../components/SearchPageCard/SearchPageCard';
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
  const searchData = useSelector(selectAllSeachData);

  const { query } = queryString.parse(window.location.search);
  const [, setSearchQueryParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchType, setSearchType] = useState(MOVIES);

  const handleOnChangeInputSearchField = ({ target: { value } }) => {
    if (!value) {
      setSearchQueryParams('');
    } else {
      setSearchQueryParams(`query=${value}`);
    }
    setSearchQuery(value);
  };

  const handleOnPressEnter = ({ key }) => {
    if (key === 'Enter') {
      dispatch(fetchSearchData({ searchQuery, searchType }));
    }
  };

  const handleOnClicktResultsMenuButton = (type) => {
    switch (type.toLowerCase()) {
      case (TV):
        setSearchType(TV);
        break;
      case (PEOPLE):
        setSearchType(PEOPLE);
        break;
      default:
        setSearchType(MOVIES);
    }
  };

  const checkSearchDataType = () => {
    if (searchType === MOVIES) {
      return (
        searchData.map(({
          id,
          poster_path: posterPath,
          release_date: releaseDate,
          title,
          overview,
        }) => (
          <SearchPageCard
            key={id}
            posterPath={posterPath}
            title={title}
            overview={overview}
            releaseDate={releaseDate}
          />
        )));
    }
    if (searchType === TV) {
      return (
        searchData.map(({
          id,
          poster_path: posterPath,
          name,
          first_air_date: releaseDate,
          overview,
        }) => (
          <SearchPageCard
            key={id}
            posterPath={posterPath}
            title={name}
            releaseDate={releaseDate}
            overview={overview}
          />
        ))
      );
    }
    return <div>hi</div>;
  };

  useEffect(() => {
    dispatch(fetchSearchData({ searchQuery, searchType }));
  }, [searchType]);

  return (
    <Box className="searchPageContainer">
      <Box className="searchInputTitle">
        <Box className="searchleft">
          <SearchIcon />
          <Input
            value={searchQuery}
            onChange={handleOnChangeInputSearchField}
            onKeyUp={handleOnPressEnter}
            id="searchInput"
          />
        </Box>
        <Button className="searchPage clearButton">
          <ClearIcon />
        </Button>
      </Box>
      <Box className="mainContentContainer">
        <Box className="searchResultsManu">
          <Typography variant="h6" className="resultsMenu header">Search Results</Typography>
          {searchTypesArray.map((type) => (
            <Button
              key={type}
              onClick={() => handleOnClicktResultsMenuButton(type)}
              className={type.toLowerCase() === searchType ? 'resultsMenu button selected' : 'resultsMenu button'}
            >
              {type}
            </Button>
          ))}
        </Box>
        <Box className="searchResultsContainer">
          {!searchData
            ? <Typography variant="h6">There are no movies that matched your query.</Typography>
            : checkSearchDataType()}
        </Box>
      </Box>
    </Box>
  );
}
