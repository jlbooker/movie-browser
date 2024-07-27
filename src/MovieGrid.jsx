import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
  let movieCards = null;

  console.log("Movies", movies);

  if (!!movies) {
    movieCards = movies.map((movie) => {
      return (
        <div className="col" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  }

  return (
    <div className="container">
      <div className="row">{movieCards}</div>
    </div>
  );
}

export default MovieGrid;
