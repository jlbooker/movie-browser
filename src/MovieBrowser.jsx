import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import MovieGrid from "./MovieGrid";
import SearchForm from "./SearchForm";
import GenreList from "./GenreList";
import { ApiTokenContext } from "./ApiTokenContext";

const API_BASE_URL = "https://0kadddxyh3.execute-api.us-east-1.amazonaws.com";

function MovieBrowser() {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");

  // API Bearer Token API
  const { data: apiToken } = useQuery({
    queryKey: ["token"],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/auth/token`);
      if (!response.ok) {
        throw new Error("There was an error while getting an API token.");
      }
      return response.json();
    },
  });

  // Movies query
  // TODO: Refactor these queries, custom hooks?
  const moviesQuery = useQuery({
    queryKey: ["movies", searchText, page, genre],
    queryFn: async () => {
      const response = await fetch(
        `${API_BASE_URL}/movies?search=${searchText}&page=${page}&genre=${genre}&limit=16`,
        {
          headers: { Authorization: `Bearer ${apiToken.token}` },
        }
      );
      if (!response.ok) {
        throw new Error("There was an error while searching for movie titles.");
      }
      return response.json();
    },
    enabled: !!apiToken?.token,
    staleTime: 300000,
  });

  // A separate query to get the full size of the results count
  // A bit of a hack... Since the API doesn't give a total results count,
  // we run the same query again with a limit of 1 item per page, and then
  // use the page count. Cheeky, if a bit wasteful.
  const resultsCountQuery = useQuery({
    queryKey: ["resultsCount", searchText, page, genre],
    queryFn: async () => {
      const response = await fetch(
        `${API_BASE_URL}/movies?search=${searchText}&page=${page}&genre=${genre}&limit=1`,
        {
          headers: { Authorization: `Bearer ${apiToken.token}` },
        }
      );
      if (!response.ok) {
        throw new Error("There was an error while searching for movie titles.");
      }
      return response.json();
    },
    enabled: !!apiToken?.token,
    staleTime: 300000,
  });

  // Genres query
  const genresQuery = useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/genres/movies`, {
        headers: { Authorization: `Bearer ${apiToken.token}` },
      });
      if (!response.ok) {
        throw new Error("There was an error while getting the list of genres.");
      }
      return response.json();
    },
    enabled: !!apiToken?.token,
    staleTIme: Infinity,
  });

  const changeGenre = (genreName) => {
    setGenre(genreName);
    setPage(1); // Always go back to the first page when we change genres
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <GenreList
          genres={genresQuery.data?.data}
          selectedGenre={genre}
          setGenre={changeGenre}
        />
      </div>
      <div className="col-md-9">
        <SearchForm onChange={setSearchText} />
        <ApiTokenContext.Provider value={apiToken}>
          <MovieGrid
            movies={moviesQuery.data?.data}
            page={page}
            totalPages={moviesQuery.data?.totalPages}
            totalResultsCount={resultsCountQuery.data?.totalPages}
            setPage={setPage}
          />
        </ApiTokenContext.Provider>
      </div>
    </div>
  );
}

export default MovieBrowser;
