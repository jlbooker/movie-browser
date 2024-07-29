import MovieCard from "./MovieCard";
import PageControl from "./PageControl";

function MovieGrid({ movies, page, totalPages, totalResultsCount, setPage }) {
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

  const zeroState = () => {
    if (totalResultsCount === 0) {
      return (
        <div className="card text-center mx-auto" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">No matching movies found</h5>
            <p className="card-text">
              Try adjusting your title search and genre filter to find something
              to watch.
            </p>
          </div>
        </div>
      );
    }

    return "";
  };

  return (
    <div>
      <PageControl
        page={page}
        totalPages={totalPages}
        totalResultsCount={totalResultsCount}
        setPage={setPage}
      />
      <div className="container">
        <div className="row">{movieCards}</div>
      </div>
      {zeroState()}
    </div>
  );
}

export default MovieGrid;
