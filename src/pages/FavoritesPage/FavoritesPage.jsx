import { useFetchServerFavoritesList } from '../../reactQuery/hooks/index';

export default function FavoritesPage() {
  const { serverFavoritesList, isLoadingServerFavoritesList } = useFetchServerFavoritesList();

  return (
    <div>favorites</div>
  );
}
