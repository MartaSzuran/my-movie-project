import { useParams } from 'react-router-dom';
import useFetchTvDetails from '../../hooks/useFetch';
import { TV } from '../../constants/searchTypes';

export default function PersonPage() {
  const { tvId } = useParams();
  const [tvData, status] = useFetchTvDetails(TV, tvId);

  return (
    <div>Tv Page</div>
  );
}
