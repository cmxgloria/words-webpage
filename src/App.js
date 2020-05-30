import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState([]);
  const [url, setUrl] = useState([]);
  // const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    wordsExistTimes(query);
  }, [query]);

  const wordsExistTimes = async (qs) => {
    const apiUrl = "";
    const respond = await fetch(apiUrl);
    const data = await respond.json();
    // console.log(data);
    setWords(data);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(words);
    setWords("");
    setQuery(url);
    setUrl("");
  };

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  // };
  const updateWords = (e) => {
    setWords(e.target.value);
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
  };
  return (
    <div className="App">
      <img
        src="https://circlein.com/wp-content/uploads/elementor/thumbs/CI-Landscape-Gradient-1-onirtzjrdivx2a3xb8n0t81wxk108wwio6undogxhi.png"
        alt="logo"
      />
      <h1>WELCOME TO CIRCLE IN</h1>

      <div className="app-content">
        <form className="search_form" onSubmit={getQuery}>
          <label htmlFor="">Words</label>
          <input
            className="word_input"
            type="text"
            value={words}
            onChange={updateWords}
          />
          <label htmlFor="">URL</label>
          <input
            className="url_input"
            type="text"
            value={url}
            onChange={updateUrl}
          />
          <button className="search_button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
