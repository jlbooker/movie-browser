function MoviePoster({ movieTitle, posterUrl }) {
  if (posterUrl === undefined) {
    // Some titles don't have a poster. Show an SVG placeholder when that happens.
    return (
      <svg
        className="card-img-top"
        width="100%"
        height="282"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`No movie poster image available for ${movieTitle}`}
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
    return (
      <img
        src={posterUrl}
        className="card-img-top"
        // style={{ maxHeight: "282px" }}
        alt={`Movie poster for ${movieTitle}`}
      />
    );
  }
}

export default MoviePoster;
