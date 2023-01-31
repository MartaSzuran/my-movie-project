import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { TV } from '../../constants/searchTypes';

export default function PersonPage() {
  const { tvId } = useParams();
  const [tvData, status] = useFetch(TV, tvId);

  return (
    <div>Tv Page</div>
  );
}
