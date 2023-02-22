export default function getMainMovieLanguage(spokenLanguages) {
  if (spokenLanguages.length) {
    const mainMovieLanguage = spokenLanguages[0].name;
    return mainMovieLanguage;
  }
  return '';
}
