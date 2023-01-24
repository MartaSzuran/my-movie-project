const { REACT_APP_MOVIE_API_KEY } = process.env;
const { REACT_APP_DB_MAIN_URL } = process.env;

const getDefaultQuery = (mainPopularQuerytype, type, sortBy, pages = 1) => {
  if (mainPopularQuerytype.includes('trending')) {
    return `${REACT_APP_DB_MAIN_URL}${mainPopularQuerytype}/${type}?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&append_to_response=images&include_image_language=en`;
  }
  return `${REACT_APP_DB_MAIN_URL}${mainPopularQuerytype}${type}?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${pages}&with_watch_monetization_types=flatrate&append_to_response=images&include_image_language=en`;
};
export default getDefaultQuery;
