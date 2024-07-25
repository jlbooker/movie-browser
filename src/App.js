import MovieBrowser from "./MovieBrowser";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Movie Browser
          </a>
        </div>
      </nav>

      <main class="container">
        <div class="bg-body-tertiary p-5 rounded">
          <h1>Movie Browser</h1>
          <p class="lead">
            This quick React demo app for searching and filtering with a movie
            API.
          </p>
          <MovieBrowser />
        </div>
      </main>
    </div>
  );
}

export default App;
