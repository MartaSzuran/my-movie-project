import { useParams } from 'react-router-dom';
import { useFetchDataDetails } from '../../reactQuery/hooks/index';
import { TV } from '../../constants/searchTypes';

export default function PersonPage() {
  const { tvId } = useParams();
  const { data, isLoading, isError } = useFetchDataDetails(TV, tvId);

  return (
    <div>Tv Page</div>
  );
}
