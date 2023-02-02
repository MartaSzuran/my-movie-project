import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';
import './SocialSectionDetailPage.css';

function SocialSectionDetailPage() {
  return (
    <>
      <Box className="socialSectionHeaderContainer">
        <Typography className="socialSectionHeader style">Social</Typography>
        <Box className="socialSectionHeaderMenuTabs">
          <Typography className="socialSectionMenuTab style">Reviews</Typography>
        </Box>
      </Box>
      <ReviewCard />
      <Typography className="redirectionSocialFooter style">Read All Reviews</Typography>
    </>
  );
}

export default SocialSectionDetailPage;
