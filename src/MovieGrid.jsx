import MovieCard from "./MovieCard";
import PageControl from "./PageControl";

function MovieGrid({ movies, page, totalPages, setPage }) {
  let movieCards = null;

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
    <div>
      <PageControl page={page} totalPages={totalPages} setPage={setPage} />
      <div className="container">
        <div className="row">{movieCards}</div>
      </div>
    </div>
  );
}

export default MovieGrid;
