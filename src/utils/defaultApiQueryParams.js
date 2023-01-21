const { REACT_APP_MOVIE_API_KEY } = process.env;

const getDefaultQuery = (sortBy, type, pages = 1) => (
  `${type}?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${pages}&with_watch_monetization_types=flatrate&append_to_response=images&include_image_language=en`
);

export default getDefaultQuery;
