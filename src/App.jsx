import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { toast } from "react-hot-toast";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query, page, per_page: 12 },
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      })
      .then((response) => {
        setImages((prev) =>
          page === 1
            ? response.data.results
            : [...prev, ...response.data.results]
        );
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Error fetching images");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const loadMore = () => setPage((prev) => prev + 1);
  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div>
      {/* Titlul principal plasat deasupra paginii */}
      <header style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Goit-neo-react-hw-module4 by Alexander Andersen</h2>
      </header>

      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <LoadMoreBtn onClick={loadMore} />
        </div>
      )}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
