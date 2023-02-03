import { PropTypes } from 'prop-types';
import { Box, Typography, Avatar } from '@mui/material';
import './ReviewCard.css';

function ReviewCard({ reviewDetails }) {
  return (
    <Box className="reviewContainer">
      <Avatar alt="reviewAuthor" src="/static/images/avatar/1.jpg" className="reviewAvatar style" />
      <Box className="reviewDetailInfoContainer">
        <Box className="reviewDetailInfoContainerHeader">
          <Typography className="reviewHeaderTitle style">
            A review by
            <span>stars</span>
          </Typography>
          <Typography className="reviewHeaderSubtitle style">Written by ... on date</Typography>
        </Box>
        <Typography className="reviewContent style">Review content</Typography>
      </Box>
    </Box>
  );
}

ReviewCard.propTypes = {
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

ReviewCard.defaultProps = {
  reviewDetails: [{
    author: '',
    authorDetails: [{
      username: '',
      rating: 0,
      avatar_path: '',
    }],
    content: '',
    createdAt: '',
  }],
};

export default ReviewCard;
