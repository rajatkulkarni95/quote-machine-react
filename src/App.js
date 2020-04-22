import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");

  function getRandomQuote() {
    let url = "https://api.quotable.io/random";

    axios.get(url).then((res) => {
      let data = res.data;

      setAuthor((author) => data.author);
      setQuote((quote) => data.content);
    });
  }

  function setTheme() {
    const themePalette = [
      "DarkMagenta",
      "DarkSlateBlue",
      "FireBrick",
      "Tomato",
      "SeaGreen",
      "DarkCyan",
      "DarkSlateGray",
      "SaddleBrown",
    ];

    const themePicker =
      themePalette[Math.floor(Math.random() * themePalette.length)];

    return themePicker;
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    setColor(setTheme());
  }, [quote]);

  return (
    <div style={{ backgroundColor: color }} className="container">
      <div className="quote_container">
        <span style={{ color: color }} className="quote_symbol">
          “&nbsp;
        </span>
        <span style={{ color: color }} className="quote_text">
          {quote}
        </span>
        <p style={{ color: color }} className="quote_author">
          {author}
        </p>
        <button
          style={{ backgroundColor: color }}
          onClick={getRandomQuote}
          className="quoteBtn"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
