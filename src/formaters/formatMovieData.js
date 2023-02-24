export default function formatMovieData(data = {}) {
  if (data?.spoken_languages) {
    const mainMovieLanguage = data.spoken_languages[0].name;
    return { ...data, mainMovieLanguage };
  }
  return {};
}
