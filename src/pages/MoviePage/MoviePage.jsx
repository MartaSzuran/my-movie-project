import { useParams, Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import {
  useFetchDataDetails,
  useFetchDataCreditsDetails,
  useFetchDataReviewsDetails,
  useFetchDataKeywordsDetails,
} from '../../reactQuery/hooks/index';
import {
  useGetMovieDataById,
  useAddLike,
  useAddTofavorites,
} from '../../graphql/hooks/index';
import DetailPagesHeader from '../../components/DetailPageHeader/DetailPagesHeader';
import DetailPageHeaderLoader from '../../components/DetailPageHeaderLoader/DetailPageHeaderLoader';
import CaruselDetailMediaPage from '../../components/CaruselDetailMediaPage/CaruselDetailMediaPage';
import CaruselLoader from '../../components/CaruselLoader/CaruselLoader';
import SocialSectionDetailPage from '../../components/SocialSectionDetailPage/SocialSectionDetailPage';
import SectionLoader from '../../components/SectionLoader/SectionLoader';
import ColumnDisplayInformation from '../../components/ColumnDisplayInformation/ColumnDisplayInformation';
import { MOVIES } from '../../constants/searchTypes';
import './MoviePage.css';

export default function MoviePage() {
  const { movieId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { mediaData, isLoading } = useFetchDataDetails(MOVIES, movieId);
  const {
    creditsData,
    isLoadingCredits,
  } = useFetchDataCreditsDetails(MOVIES, movieId);

  const {
    reviewsData,
    isLoadingReviews,
  } = useFetchDataReviewsDetails(MOVIES, movieId);

  const { keywordsData, isLoadingKeywords } = useFetchDataKeywordsDetails(MOVIES, movieId);

  const { serverMovieData, isLoadingMovieServerData } = useGetMovieDataById(movieId);

  const { addLike } = useAddLike();
  const { addToFavorites } = useAddTofavorites();

  useEffect(() => {
    if (serverMovieData.liked) {
      setIsLiked(serverMovieData.liked);
      setIsFavorite(serverMovieData.favorite);
    }
  }, [serverMovieData]);

  const { keywords } = keywordsData;

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
    status,
    budget,
    mainMovieLanguage,
    revenue,
  } = mediaData;

  const directorMadiaInfo = () => {
    const director = creditsData.crew.find((el) => el.job === 'Director');
    return director.name;
  };

  const castMediaInfo = () => {
    const mainCast = creditsData.cast.slice(0, 10);
    return mainCast;
  };

  const getMainReviewData = () => {
    const firstReview = reviewsData.results[0];
    const numberOfReviews = reviewsData.results.length;
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
      numberOfReviews,
    };
  };

  const checkIfReviewsExists = () => {
    if (reviewsData.results.length) {
      return <SocialSectionDetailPage reviewDetails={getMainReviewData()} />;
    }
    return (
      <Box className="addFirstReviewContainer">
        <Link to="reviews" className="addFirstReviewLink style">Add first review</Link>
      </Box>
    );
  };

  const handleAddToFavoritesClick = (value) => {
    setIsFavorite(value);
    addToFavorites({ variables: { movieId, favorite: value } });
  };

  const handleAddLikeClick = (value) => {
    setIsLiked(value);
    addLike({
      variables: { movieId, liked: value },
      optimisticResponse: {
        addLike: {
          movieId,
          liked: value,
        },
      },
    });
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
            handleOnAddToFavoritesClick={handleAddToFavoritesClick}
            handleOnAddLikeClick={handleAddLikeClick}
            isLiked={isLiked}
            isFavorite={isFavorite}
            isLoadingMovieServerData={isLoadingMovieServerData}
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
                checkIfReviewsExists()
              )
              : (
                <SectionLoader />
              )}
          </Box>
        </Box>
        <Box className="rightColumnDetails">
          {!isLoadingKeywords && keywords.length
            ? (
              <Box className="rigthInfoContainer">
                <ColumnDisplayInformation
                  status={status}
                  language={mainMovieLanguage}
                  budget={budget}
                  revenue={revenue}
                  keywords={keywords}
                  isLoadingKeywords={isLoadingKeywords}
                />
              </Box>
            )
            : (
              <Typography>Status</Typography>
            )}
        </Box>
      </Box>
    </Box>
  );
}
