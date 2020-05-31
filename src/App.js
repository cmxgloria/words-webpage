import React, { useEffect, useState } from "react";
import "./App.css";
import { getWordCount, getCleanedText, isValidUrl } from "./helper";
import Loader from "./components/Loader";

function App() {
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [count, setCount] = useState();
  const [htmlText, setHtmlText] = useState("");

  const countWordFrequencies = async (e) => {
    e.preventDefault();
    if (!word.trim()) {
      alert("Please provide a word");
      return;
    }
    if (!isValidUrl(url)) {
      alert("Please provide a valid url");
      return;
    }
    setLoading(true);
    setCount("");
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
      const response = await fetch(proxyUrl + url, { mode: "cors" });
      const htmlString = await response.text();
      const cleanedText = getCleanedText(htmlString);
      const count = getWordCount(word, cleanedText);
      setHtmlText(cleanedText);
      setCount(count);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
          Total number of the word <strong>{word}</strong> appear on page{" "}
          <strong>{url}</strong>:
        </span>
        {loading && <Loader />}
        <h2>{count}</h2>
        {htmlText && (
          <div>
            <h3>Crawled Text from {url}: </h3>
            <textarea
              style={{
                height: "300px",
                maxWidth: "600px",
                width: "100%",
                margin: "20px",
              }}
              readOnly
              value={htmlText}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
