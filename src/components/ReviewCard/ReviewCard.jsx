import { PropTypes } from 'prop-types';
import { Box, Typography, Avatar } from '@mui/material';
import useDateFormat from '../../hooks/useDateFormat';
import { AVATAR_PHOTO_URL } from '../../constants/photosBasicUrl';
import './ReviewCard.css';

function ReviewCard({ reviewDetails }) {
  const { rating, avatar_path: avatarPath } = reviewDetails.authorDetails;
  const { author, createdAt, content } = reviewDetails;
  const [day, month, year] = useDateFormat(createdAt);

  return (
    <Box className="reviewContainer">
      {avatarPath
        ? (<Avatar alt="name" src={`${AVATAR_PHOTO_URL}${avatarPath}`} className="reviewAvatar style" />)
        : (<Avatar alt="noPhoto" className="reviewAvatar style">P</Avatar>)}
      <Box className="reviewDetailInfoContainer">
        <Box className="reviewDetailInfoContainerHeader">
          <Box className="firstRow">
            <Typography className="reviewHeaderTitle style">
              {`A review by ${author} `}
            </Typography>
            <Box className="starsRatingContainer">
              <span className="starsRating">
                {`★ ${rating}.0 `}
              </span>
            </Box>
          </Box>
          <Typography className="reviewHeaderSubtitle style">
            {`Written by ${author} on ${month} ${day},${year}`}
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
          rating: PropTypes.number,
          avatar_path: PropTypes.string,
        }),
      author: PropTypes.string,
      content: PropTypes.string,
      createdAt: PropTypes.string,
    }),
};

ReviewCard.defaultProps = {
  reviewDetails: {
    authorDetails: {
      rating: 0,
      avatar_path: '',
    },
    author: '',
    content: '',
    createdAt: '',
  },
};

export default ReviewCard;
