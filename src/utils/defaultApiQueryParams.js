const { REACT_APP_MOVIE_API_KEY } = process.env;

export default function defaultQuery(sortBy, pages, type) {
  return `${type}?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${pages}&with_watch_monetization_types=flatrate&append_to_response=images&include_image_language=en`;
}
