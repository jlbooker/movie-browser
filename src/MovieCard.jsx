import { useState } from "react";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import MovieDetails from "./MovieDetails";

function MovieCard({ movie }) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handlePosterClick = () => {
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
  };

  return (
    <>
      <div
        className="card mb-4"
        style={{ width: "12rem" }}
        onClick={handlePosterClick}
      >
        <MoviePoster movieTitle={movie.title} posterUrl={movie.posterUrl} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            <MovieRating rating={movie.rating} />
          </p>
        </div>
      </div>

      <MovieDetails
        showModal={showDetailsModal}
        handleClose={handleCloseModal}
        movie={movie}
      />
    </>
  );
}

export default MovieCard;
