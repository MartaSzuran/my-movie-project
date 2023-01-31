import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { PEOPLE } from '../../constants/searchTypes';

export default function PersonPage() {
  const { personId } = useParams();
  const [personData, status] = useFetch(PEOPLE, personId);

  return (
    <div>person Page</div>
  );
}
