import { useParams } from 'react-router-dom';
import useFetchDataDetails from '../../hooks/useFetchDataDetails';
import { PEOPLE } from '../../constants/searchTypes';

export default function PersonPage() {
  const { personId } = useParams();
  const { personData, isLoading, error } = useFetchDataDetails(PEOPLE, personId);

  return (
    <div>person Page</div>
  );
}
