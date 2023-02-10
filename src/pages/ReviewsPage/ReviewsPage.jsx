import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import { Box, Button, Input } from '@mui/material';
import {
  useFetchDataReviewsDetails,
  useFetchDataDetails,
  useFetchServerReviews,
} from '../../hooks/useFetchDataDetails';
import { postNewReview } from '../../queries/index';
import { MOVIES } from '../../constants/searchTypes';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import SectionLoader from '../../components/SectionLoader/SectionLoader';
import HeaderLoader from '../../components/HeaderLoader/HeaderLoader';
import { SMALL_POSTER_PHOTO_URL } from '../../constants/photosBasicUrl';
import './ReviewsPage.css';

export default function ReviewsPage() {
  const [newAuthor, setNewAuthor] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(true);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const {
    reviewsData,
    isLoadingReviews,
  } = useFetchDataReviewsDetails(MOVIES, movieId);

  const reviews = reviewsData.results;

  const { mediaData, isLoading } = useFetchDataDetails(MOVIES, movieId);
  const { title, poster_path: posterPath, release_date: releaseDate } = mediaData;

  const {
    serverReviews,
    isLoadingServerReviews,
  } = useFetchServerReviews();

  const getReviewData = (review) => {
    const {
      author,
      author_details: authorDetails,
      content,
      created_at: createdAt,
    } = review;
    return {
      author,
      authorDetails,
      content,
      createdAt,
    };
  };

  const handleOnClickAddReviewButton = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleOnReviewAuthorInputChange = ({ target: { value } }) => {
    setNewAuthor(value);
  };

  const handleOnReviewDescriptionInputChange = ({ target: { value } }) => {
    setReviewDescription(value);
  };

  const onClickSubmitNewReviewButton = () => {
    if (newAuthor && reviewDescription) {
      postNewReview({
        author: newAuthor,
        reviewDescription,
        movieId,
      });
      setIsInputVisible(true);
      clearInputsFields();
    }
  };

  const onClickCancelNewReviewButton = () => {
    setNewAuthor('');
    setReviewDescription('');
    setIsInputVisible(true);
    clearInputsFields();
  };

  const reviewsCardGenerator = () => (
    reviews.map((review) => {
      const reviewDetails = getReviewData(review);
      return (
        <ReviewCard
          key={review.id}
          reviewDetails={reviewDetails}
        />
      );
    })
  );

  const clearInputsFields = () => {
    setNewAuthor('');
    setReviewDescription('');
  };

  return (
    <Box className="reviewsPageContainer">
      {!isLoading
        ? (
          <Box className="reviewsPageHeader">
            <img
              className="smallMediaPoster style"
              src={`${SMALL_POSTER_PHOTO_URL}${posterPath}`}
              alt={title}
            />
            <Box className="reviewPageHEaderContainer">
              <Box className="reviewPageHeaderTItle">
                {title}
                {` (${moment(releaseDate).format('YYYY')})`}
              </Box>
              <Button onClick={() => navigate(-1)} className="reviewHeaderButton style">⇦ Back to main</Button>
            </Box>
          </Box>
        )
        : (<HeaderLoader />)}
      <Box className="reviewsColumns">
        <Box className="addReviewButtonContainer">
          <Button onClick={handleOnClickAddReviewButton} className="addReviewButton style">✎ Write review</Button>
        </Box>
        <Box className="reviewsColumn">
          <Box className={isInputVisible ? 'reviewFormContainer hidden' : 'reviewFormContainer'}>
            <Input
              placeholder="Author name"
              value={newAuthor}
              onChange={handleOnReviewAuthorInputChange}
              className="reviewAuthorInputField style"
            />
            <Input
              placeholder="Write your review here..."
              value={reviewDescription}
              onChange={handleOnReviewDescriptionInputChange}
              multiline
              className="reviewDescriptionInputField style"
            />
            <Box className="reviewFormButtonsContainer">
              <Button onClick={onClickSubmitNewReviewButton} className="reviewFormButtons style">Submit</Button>
              <Button onClick={onClickCancelNewReviewButton} className="reviewFormButtons style">Cancel</Button>
            </Box>
          </Box>
          <Box className="cardReviewsColumns">
            {!isLoadingReviews
              ? (reviewsCardGenerator())
              : (<SectionLoader />)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
