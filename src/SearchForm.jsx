import { useEffect, useState } from "react";

function SearchForm({ onChange }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (inputText) => {
    setInputText(inputText);
  };

  // Cheap and easy debounce, so we're kind to the API
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(inputText);
    }, 250);
    return () => clearTimeout(timeoutId);
  }, [inputText, onChange]);

  return (
    <div className="mb-3">
      <label htmlFor="searchText" className="form-label lead">
        Search
      </label>
      <input
        type="text"
        className="form-control"
        id="searchText"
        placeholder="Search for a title"
        onChange={(e) => handleInputChange(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchForm;
