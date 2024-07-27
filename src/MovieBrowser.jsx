import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import MovieGrid from "./MovieGrid";
import SearchForm from "./SearchForm";

const API_BASE_URL = "https://0kadddxyh3.execute-api.us-east-1.amazonaws.com";

function MovieBrowser() {
  // const queryClient = useQueryClient();
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
  const moviesQuery = useQuery({
    queryKey: ["movies", searchText, page],
    queryFn: async () => {
      const response = await fetch(
        `${API_BASE_URL}/movies?search=${searchText}&page=${page}&genre=${genre}`,
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
  });

  return (
    <div>
      <SearchForm onChange={setSearchText} />
      <MovieGrid
        movies={moviesQuery.data?.data}
        page={page}
        totalPages={moviesQuery.data?.totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default MovieBrowser;
