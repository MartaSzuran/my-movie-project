import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';
import './SocialSectionDetailPage.css';

function SocialSectionDetailPage({ reviewDetails }) {
  return (
    <>
      <Box className="socialSectionHeaderContainer">
        <Typography className="socialSectionHeader style">Social</Typography>
        <Box className="socialSectionHeaderMenuTabs">
          <Typography className="socialSectionMenuTab style">Reviews</Typography>
        </Box>
      </Box>
      <ReviewCard reviewDetails={reviewDetails} />
      <Typography className="redirectionSocialFooter style">Read All Reviews</Typography>
    </>
  );
}

SocialSectionDetailPage.propTypes = {
  reviewDetails: PropTypes.objectOf(
    PropTypes.shape({
      author: PropTypes.string,
      authorDetails: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          rating: PropTypes.number,
          avatar_path: PropTypes.string,
        }),
      ),
      content: PropTypes.string,
      createdAt: PropTypes.string,
    }),
  ),
};

SocialSectionDetailPage.defaultProps = {
  reviewDetails: {
    author: '',
    authorDetails: [{
      username: '',
      rating: 0,
      avatar_path: '',
    }],
    content: '',
    createdAt: '',
  },
};

export default SocialSectionDetailPage;
