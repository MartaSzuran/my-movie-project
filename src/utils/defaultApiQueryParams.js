const { REACT_APP_MOVIE_API_KEY } = process.env;
const { REACT_APP_DB_MAIN_URL } = process.env;

const getDefaultQuery = (mainPopularQuerytype, otherUrlPart) => `${REACT_APP_DB_MAIN_URL}${mainPopularQuerytype}?api_key=${REACT_APP_MOVIE_API_KEY}${otherUrlPart}`;

export default getDefaultQuery;
