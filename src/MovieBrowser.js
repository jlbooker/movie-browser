import { useQuery, useQueryClient } from "@tanstack/react-query";

const API_BASE_URI = "https://0kadddxyh3.execute-api.us-east-1.amazonaws.com";

function MovieBrowser() {
  const queryClient = useQueryClient();

  // API Bearer Token API
  const { data: apiToken } = useQuery({
    queryKey: ["token"],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URI}/auth/token`);
      if (!response.ok) {
        throw new Error("There was an error while getting an API token.");
      }
      return response.json();
    },
  });

  // Movies query
  const moviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URI}/movies`, {
        headers: { Authorization: `Bearer ${apiToken.token}` },
      });
      if (!response.ok) {
        throw new Error("There was an error while getting an API token.");
      }
      return response.json();
    },
    enabled: !!apiToken?.token,
  });

  return <div>Movie Browser demo</div>;
}

export default MovieBrowser;
