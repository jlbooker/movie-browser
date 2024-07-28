import classNames from "classnames";

function GenreList({ genres, selectedGenre, setGenre }) {
  const toggleGenre = (genreName) => {
    // If already selected, then clear the selection, and quit
    if (genreName === selectedGenre) {
      setGenre("");
      return;
    }

    setGenre(genreName);
  };

  const genreItems = () => {
    if (genres === undefined) {
      return "";
    }

    return genres.map((genre) => {
      const linkClasses = classNames({
        "list-group-item": true,
        "list-group-item-action": true,
        active: genre.title === selectedGenre,
      });

      return (
        <a
          href="/"
          className={linkClasses}
          key={genre.id}
          aria-current={genre.title === selectedGenre}
          onClick={(e) => {
            e.preventDefault();
            toggleGenre(genre.title);
          }}
        >
          {genre.title}
        </a>
      );
    });
  };

  return (
    <div>
      <p className="lead">Genres</p>
      <div className="list-group">{genreItems()}</div>
    </div>
  );
}

export default GenreList;
