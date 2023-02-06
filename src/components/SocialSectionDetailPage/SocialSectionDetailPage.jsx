import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';
import './SocialSectionDetailPage.css';

function SocialSectionDetailPage({ reviewDetails }) {
  return (
    <>
      <Box className="socialSectionHeaderContainer">
        <Typography className="socialSectionHeader style">Social</Typography>
        <Box className="socialSectionHeaderMenuTabs">
          <Link to="reviews" className="socialSectionMenuTab style">{`Reviews (${reviewDetails.numberOfReviews})`}</Link>
        </Box>
      </Box>
      <ReviewCard reviewDetails={reviewDetails} />
      <Link to="reviews" className="redirectionSocialFooter style">Read All Reviews</Link>
    </>
  );
}

SocialSectionDetailPage.propTypes = {
  reviewDetails:
    PropTypes.shape({
      authorDetails:
        PropTypes.shape({
          rating: PropTypes.number,
          avatar_path: PropTypes.string,
        }),
      author: PropTypes.string,
      content: PropTypes.string,
      createdAt: PropTypes.string,
      numberOfReviews: PropTypes.number,
    }),
};

SocialSectionDetailPage.defaultProps = {
  reviewDetails: {
    authorDetails: {
      rating: 0,
      avatar_path: '',
    },
    author: '',
    content: '',
    createdAt: '',
    numberOfReviews: 0,
  },
};

export default SocialSectionDetailPage;
