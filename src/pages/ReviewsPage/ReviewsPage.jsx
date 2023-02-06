import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import { useFetchDataReviewsDetails, useFetchDataDetails } from '../../hooks/useFetchDataDetails';
import { MOVIES } from '../../constants/searchTypes';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import SectionLoader from '../../components/SectionLoader/SectionLoader';
import { SMALL_POSTER_PHOTO_URL } from '../../constants/photosBasicUrl';
import './ReviewsPage.css';

export default function ReviewsPage() {
  const [newReview, setNewReview] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(true);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const {
    reviewsData,
    isLoadingReviews,
  } = useFetchDataReviewsDetails(MOVIES, movieId);

  const reviews = reviewsData.results;
  const { mediaData, isLoading } = useFetchDataDetails(MOVIES, movieId);
  const { title, poster_path: posterPath } = mediaData;

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

  const handleOnReviewInputChange = ({ target: { value } }) => {
    setNewReview(value);
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
              <Box className="reviewPageHeaderTItle">{title}</Box>
              <Button onClick={() => navigate(-1)} className="reviewHeaderButton style">⇦ Back to main</Button>
            </Box>
          </Box>
        )
        : (<Box>TITLE</Box>)}
      <Box className="reviewsColumns">
        <Box className="addReviewButtonContainer">
          <Button onClick={handleOnClickAddReviewButton} className="addReviewButton style">✎ Write review</Button>
        </Box>
        <Box className="reviewsColumn">
          <Box className={isInputVisible ? 'reviewFormContainer hidden' : 'reviewFormContainer'}>
            <Input
              placeholder="Write your review here..."
              value={newReview}
              onChange={handleOnReviewInputChange}
              multiline
              className="reviewInputField style"
            />
            <Box className="reviewFormButtonsContainer">
              <Button className="reviewFormButtons style">Submit</Button>
              <Button className="reviewFormButtons style">Canel</Button>
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
