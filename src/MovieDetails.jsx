import { useContext } from "react";
import { ApiTokenContext } from "./ApiTokenContext.js";
import Modal from "react-bootstrap/Modal";
import MoviePoster from "./MoviePoster";
import { useQuery } from "@tanstack/react-query";
import MovieRating from "./MovieRating.jsx";

const API_BASE_URL = "https://0kadddxyh3.execute-api.us-east-1.amazonaws.com";

function MovieDetails({ showModal, handleClose, movie }) {
  const apiToken = useContext(ApiTokenContext);

  const movieDetails = useQuery({
    queryKey: ["movies", movie.id],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/movies/${movie.id}`, {
        headers: { Authorization: `Bearer ${apiToken.token}` },
      });
      if (!response.ok) {
        throw new Error("There was an error while fetching the movie details.");
      }
      return response.json();
    },
    enabled: !!apiToken?.token && showModal,
    staleTime: 300000,
  });

  const genreTags = movieDetails.data?.genres.map((genre) => {
    return (
      <span
        className="badge text-bg-secondary"
        style={{ marginRight: ".25rem" }}
        key={genre.id}
      >
        {genre.title}
      </span>
    );
  });

  return (
    <Modal show={showModal} onHide={handleClose} size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <MoviePoster movieTitle={movie.title} posterUrl={movie.posterUrl} />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <MovieRating rating={movie.rating} />
              </div>
              <div className="col-md-6 text-end">
                <p>{movieDetails.data?.ratingValue} ⭐</p>
              </div>
            </div>
            <p className="lead">{movieDetails.data?.summary}</p>
            <p>Staring {movieDetails.data?.mainActors.join(", ")}</p>
            <p>Directors {movieDetails.data?.directors.join(", ")}</p>
            <p>{movieDetails.data?.datePublished.split("-")[0]}</p>
            <p>{genreTags}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MovieDetails;
