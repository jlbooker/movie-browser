import MovieBrowser from "./MovieBrowser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Movie Browser
          </a>
        </div>
      </nav>

      <main className="container">
        <div className="bg-body-tertiary p-5 rounded">
          <h1>Movie Browser</h1>
          <p className="lead">
            This quick React demo app for searching and filtering with a movie
            API.
          </p>
          <QueryClientProvider client={queryClient}>
            <MovieBrowser />
          </QueryClientProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
