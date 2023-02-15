import { useParams } from 'react-router-dom';
import { useFetchDataDetails } from '../../hooks/index';
import { PEOPLE } from '../../constants/searchTypes';

export default function PersonPage() {
  const { personId } = useParams();
  const { data, isLoading, isError } = useFetchDataDetails(PEOPLE, personId);

  return (
    <div>person Page</div>
  );
}
