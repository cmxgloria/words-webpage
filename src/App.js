import React, { useEffect, useState } from "react";
import "./App.css";
import { getWordCount } from "./helper";

function App() {
  const [word, setWord] = useState("");
  const [url, setUrl] = useState("");
  const [count, setCount] = useState();

  const countWordFrequencies = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, { mode: "cors" });
      const text = await response.text();
      const c = getWordCount(word, text);
      console.log(text);
      setCount(c);
    } catch (error) {
      alert(`Crawl ${url} failed`);
    }
  };

  const updateWords = (e) => {
    setWord(e.target.value);
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
        <form className="search_form" onSubmit={countWordFrequencies}>
          <div className="word_input">
            <label htmlFor="">Word</label>
            <input type="text" value={word} onChange={updateWords} />
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
          Total times of the words in URL: {count}
        </span>
      </div>
    </div>
  );
}

export default App;
