import { useParams } from 'react-router-dom';
import useFetchPersonDetails from '../../hooks/useFetch';
import { PEOPLE } from '../../constants/searchTypes';

export default function PersonPage() {
  const { personId } = useParams();
  const [personData, status] = useFetchPersonDetails(PEOPLE, personId);

  return (
    <div>person Page</div>
  );
}
