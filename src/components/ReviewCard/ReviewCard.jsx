import { PropTypes } from 'prop-types';
import { Box, Typography, Avatar } from '@mui/material';
import useDateFormat from '../../hooks/useDateFormat';
import { AVATAR_PHOTO_URL } from '../../constants/photosBasicUrl';
import './ReviewCard.css';

function ReviewCard({ reviewDetails }) {
  const { name, rating, avatar_path: avatarPath } = reviewDetails.authorDetails;
  const { createdAt, content } = reviewDetails;
  const [day, month, year] = useDateFormat(createdAt);

  return (
    <Box className="reviewContainer">
      <Avatar alt="name" src={`${AVATAR_PHOTO_URL}${avatarPath}`} className="reviewAvatar style" />
      <Box className="reviewDetailInfoContainer">
        <Box className="reviewDetailInfoContainerHeader">
          <Box className="firstRow">
            <Typography className="reviewHeaderTitle style">
              {`A review by ${name} `}
            </Typography>
            <Box className="starsRatingContainer">
              <span className="starsRating">
                {`★ ${rating}.0 `}
              </span>
            </Box>
          </Box>
          <Typography className="reviewHeaderSubtitle style">
            {`Written by ${name} on ${month} ${day},${year}`}
          </Typography>
        </Box>
        <Typography className="reviewContent style">{content}</Typography>
      </Box>
    </Box>
  );
}

ReviewCard.propTypes = {
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

ReviewCard.defaultProps = {
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

export default ReviewCard;
