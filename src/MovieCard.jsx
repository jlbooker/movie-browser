import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";

function MovieCard({ movie }) {
  return (
    <div className="card mb-4" style={{ width: "12rem" }}>
      <MoviePoster movieTitle={movie.title} posterUrl={movie.posterUrl} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        {/* <p className="card-text">Some text about the movie.</p> */}
        <p className="card-text">
          <MovieRating rating={movie.rating} />
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
