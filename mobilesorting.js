// AlbumScreen.js
const AlbumScreen = ({ route }) => {
  const { albumId, sortOrder } = route.params;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://your-server-url.com/album/${albumId}/photos?sortOrder=${sortOrder}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, [albumId, sortOrder]);

  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => <Image source={{ uri: item.url }} />}
      keyExtractor={(item) => item.id}
    />
  );
};
