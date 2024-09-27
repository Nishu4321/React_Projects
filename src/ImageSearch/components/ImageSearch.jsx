import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./ImageSearch.module.css";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

function ImageSearch() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setErrorMsg("");
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${
            searchInput.current.value
          }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later.");
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };

  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>Image Search</h1>
      {errorMsg && <p className={`${styles.error_msg}`}>{errorMsg}</p>}
      <div className={`${styles.search_section}`}>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Type something to search..."
            className={`${styles.search_input}`}
            ref={searchInput}
          />
        </Form>
      </div>
      <div className={`${styles.filters}`}>
        <div onClick={() => handleSelection("nature")}>Nature</div>
        <div onClick={() => handleSelection("birds")}>Birds</div>
        <div onClick={() => handleSelection("cats")}>Cats</div>
        <div onClick={() => handleSelection("shoes")}>Shoes</div>
      </div>
      {loading ? (
        <p className={`${styles.loading}`}>Loading...</p>
      ) : (
        <>
          <div className={`${styles.images}`}>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description}
                className={`${styles.image}`}
              />
            ))}
          </div>
          <div className={`${styles.buttons}`}>
            {page > 1 && (
              <Button onClick={() => setPage(page - 1)}>Previous</Button>
            )}
            {page < totalPages && (
              <Button onClick={() => setPage(page + 1)}>Next</Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ImageSearch;
