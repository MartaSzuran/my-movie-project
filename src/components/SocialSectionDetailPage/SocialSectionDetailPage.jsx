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
  reviewDetails:
    PropTypes.shape({
      authorDetails:
        PropTypes.shape({
          name: PropTypes.string,
          rating: PropTypes.number,
          avatar_path: PropTypes.string,
        }),
      content: PropTypes.string,
      createdAt: PropTypes.string,
    }),
};

SocialSectionDetailPage.defaultProps = {
  reviewDetails: {
    authorDetails: {
      name: '',
      rating: 0,
      avatar_path: '',
    },
    content: '',
    createdAt: '',
  },
};

export default SocialSectionDetailPage;
