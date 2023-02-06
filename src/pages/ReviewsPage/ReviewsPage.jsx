import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, Input } from '@mui/material';
import { useFetchDataReviewsDetails } from '../../hooks/useFetchDataDetails';
import { MOVIES } from '../../constants/searchTypes';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import SectionLoader from '../../components/SectionLoader/SectionLoader';
import './ReviewsPage.css';

export default function ReviewsPage() {
  const [newReview, setNewReview] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(true);
  const { movieId } = useParams();
  const {
    reviewsData,
    isLoadingReviews,
  } = useFetchDataReviewsDetails(MOVIES, movieId);
  const reviews = reviewsData.results;

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

  // const reviewsCardGenerator = () => {
  //   reviews.map((review) => {
  //     const reviewDetails = getReviewData(review);
  //     return (
  //       <ReviewCard
  //         key={review.id}
  //         reviewDetails={reviewDetails}
  //       />
  //     );
  //   });
  // };

  return (
    <Box className="reviewsPageContainer">
      <Box>Reviews Header</Box>
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
              ? (reviews.map((review) => {
                const reviewDetails = getReviewData(review);
                return (
                  <ReviewCard
                    key={review.id}
                    reviewDetails={reviewDetails}
                  />
                );
              }))
              : (<SectionLoader />)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
