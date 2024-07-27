function MovieRating({ rating }) {
  if (rating === undefined) {
    return <small>rating unknown</small>;
  } else {
    return (
      <span
        style={{
          fontFamily: "Georgia, serif",
          border: "solid 1px black",
          padding: "2px",
        }}
      >
        {rating}
      </span>
    );
  }
}

export default MovieRating;
