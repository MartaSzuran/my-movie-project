const { REACT_APP_MOVIE_API_KEY } = process.env;
const { REACT_APP_DB_MAIN_URL } = process.env;

const language = '&language=en-US';
const adultsMvies = '&include_adult=false';

const getDefaultQuery = (query, otherUrlPart) => `${REACT_APP_DB_MAIN_URL}${query}?api_key=${REACT_APP_MOVIE_API_KEY}${otherUrlPart}${language}${adultsMvies}`;

export default getDefaultQuery;
