import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useFetchDataDetails, useFetchDataCreditsDetails, useFetchDataReviewsDetails } from '../../hooks/useFetchDataDetails';
import DetailPagesHeader from '../../components/DetailPageHeader/DetailPagesHeader';
import DetailPageHeaderLoader from '../../components/DetailPageHeaderLoader/DetailPageHeaderLoader';
import CaruselDetailMediaPage from '../../components/CaruselDetailMediaPage/CaruselDetailMediaPage';
import CaruselLoader from '../../components/CaruselLoader/CaruselLoader';
import SocialSectionDetailPage from '../../components/SocialSectionDetailPage/SocialSectionDetailPage';
import SectionLoader from '../../components/SectionLoader/SectionLoader';
import { MOVIES } from '../../constants/searchTypes';
import './MoviePage.css';

export default function MoviePage() {
  const { movieId } = useParams();

  const { mediaData, isLoading, isError } = useFetchDataDetails(MOVIES, movieId);
  const {
    creditsData,
    isLoadingCredits,
    isErrorCredits,
  } = useFetchDataCreditsDetails(MOVIES, movieId);

  const {
    reviewsData,
    isLoadingReviews,
    isErrorReviews,
  } = useFetchDataReviewsDetails(MOVIES, movieId);

  const {
    title,
    tagline,
    backdrop_path: imagePath,
    poster_path: poster,
    genres,
    overview,
    release_date: releaseDate,
    popularity,
    runtime,
    production_countries: productionCoutries,
  } = mediaData;

  const directorMadiaInfo = () => {
    const director = creditsData.crew.find((el) => el.job === 'Director');
    return director.name;
  };

  const castMediaInfo = () => {
    const mainCast = creditsData.cast.slice(0, 10);
    return mainCast;
  };

  const mainReview = () => {
    const firstReview = reviewsData.results[0];
    const {
      author,
      author_details: authorDetails,
      content,
      created_at: createdAt,
    } = firstReview;
    return {
      author,
      authorDetails,
      content,
      createdAt,
    };
  };

  return (
    <Box>
      {!isLoading && !isLoadingCredits
        ? (
          <DetailPagesHeader
            title={title}
            tagline={tagline}
            imagePath={imagePath}
            poster={poster}
            genres={genres}
            overview={overview}
            releaseDate={releaseDate}
            popularity={popularity}
            runtime={runtime}
            productionCoutries={productionCoutries}
            mediaDirector={directorMadiaInfo()}
          />
        )
        : <DetailPageHeaderLoader />}
      <Box className="mainDetailPageContainer">
        <Box className="leftColumnDetails">
          <Box className="detailCaruselContainer">
            {!isLoadingCredits
              ? (
                <CaruselDetailMediaPage topCast={castMediaInfo()} />
              )
              : (
                <Box className="caruselDetailBody ">
                  <CaruselLoader />
                </Box>
              )}
          </Box>
          <Box className="detailSocialContainer">
            {!isLoadingReviews
              ? (
                <SocialSectionDetailPage reviewDetails={mainReview()} />
              )
              : (
                <SectionLoader />
              )}
          </Box>
        </Box>
        <Box className="rightColumnDetails">
          <Typography>Status</Typography>
        </Box>
      </Box>
    </Box>
  );
}
