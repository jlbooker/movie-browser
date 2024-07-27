function MovieCard({ movie }) {
  let posterImage = null;

  if (movie.posterUrl === undefined) {
    // Some titles don't have a poster. Show an SVG placeholder when that happens.
    posterImage = (
      <svg
        className="card-img-top"
        width="100%"
        height="282"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`No movie poster image available for ${movie.title}`}
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="15%" y="50%" fill="#dee2e6" dy=".3em">
          No poster available
        </text>
      </svg>
    );
  } else {
    posterImage = (
      <img
        src={movie.posterUrl}
        className="card-img-top"
        style={{ maxHeight: "282px" }}
        alt={`Movie poster for ${movie.title}`}
      />
    );
  }

  return (
    <div className="card mb-4" style={{ width: "12rem" }}>
      {posterImage}
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">Some text about the movie.</p>
        <p className="card-text">{movie.rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
