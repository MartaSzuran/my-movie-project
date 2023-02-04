import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import InformationTitleDescriptionDisplay from '../InformationTitleDescriptionDisplay/InformationTitleDescriptionDisplay';
import {
  STATUS,
  BUDGET,
  LANGUAGE,
  REVENUE,
} from '../../constants/detailPageRightColumnTitles';
import MediaKeywords from '../MediaKeywords/MediaKeywords';
import './ColumnDisplayInformation.css';

function ColumnDisplayInformation({
  status,
  language,
  budget,
  revenue,
  keywords,
  isLoadingKeywords,
}) {
  return (
    <>
      <Box className="rightColumnIcons">
        <LocalMoviesSharpIcon className="icon style rigthBorderIcon" />
        <HomeSharpIcon className="icon style" />
      </Box>
      <Box>
        <InformationTitleDescriptionDisplay title={STATUS} description={status} />
        <InformationTitleDescriptionDisplay title={REVENUE} description={revenue} />
        <InformationTitleDescriptionDisplay title={BUDGET} description={budget} />
        <InformationTitleDescriptionDisplay title={LANGUAGE} description={language} />
      </Box>
      <Box>
        <MediaKeywords keywords={keywords} isLoadingKeywords={isLoadingKeywords} />
      </Box>
    </>
  );
}

ColumnDisplayInformation.propTypes = {
  status: PropTypes.string,
  language: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  keywords: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  isLoadingKeywords: PropTypes.bool,
};

ColumnDisplayInformation.defaultProps = {
  status: '',
  language: '',
  budget: 0,
  revenue: 0,
  keywords: [{
    name: '',
  }],
  isLoadingKeywords: true,
};

export default ColumnDisplayInformation;
