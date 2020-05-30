import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState([]);
  const [url, setUrl] = useState([]);
  // const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [wordsTimes, setWordsTimes] = useState("0");

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

  const updateWordsTimes = (e) => {
    getQuery(e.target.value);
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
          <div className="word_input">
            <label htmlFor="">Words</label>
            <input type="text" value={words} onChange={updateWords} />
          </div>
          <div className="url_input">
            <label htmlFor="">URL</label>
            <input type="text" value={url} onChange={updateUrl} />
          </div>

          <button className="search_button" type="submit">
            Search
          </button>
        </form>
        <span className="words_times">
          Total times of the words in URL: {updateWordsTimes}
        </span>
      </div>
    </div>
  );
}

export default App;
