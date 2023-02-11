import { PropTypes } from 'prop-types';
import moment from 'moment';
import { Box, Typography, Avatar } from '@mui/material';
import './ServerReviewCard.css';

function ServerReviewCard({ serverReviewDetail }) {
  const { author, createdAt, content } = serverReviewDetail;

  return (
    <Box className="reviewContainer">
      <Avatar alt="noPhoto" className="reviewAvatar style">P</Avatar>
      <Box className="reviewDetailInfoContainer">
        <Box className="reviewDetailInfoContainerHeader">
          <Box className="firstRow">
            <Typography className="reviewHeaderTitle style">
              {`A review by ${author} `}
            </Typography>
          </Box>
          <Typography className="reviewHeaderSubtitle style">
            {`Written by ${author} on ${moment(createdAt).format('MMMM D, YYYY')}`}
          </Typography>
        </Box>
        <Typography className="reviewContent style">{content}</Typography>
      </Box>
    </Box>
  );
}

ServerReviewCard.propTypes = {
  serverReviewDetail:
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      createdAt: PropTypes.string,
    }),
};

ServerReviewCard.defaultProps = {
  serverReviewDetail: {
    author: '',
    content: '',
    createdAt: '',
  },
};

export default ServerReviewCard;
