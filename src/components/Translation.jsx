import React from "react";

function Translation({ start, setInput, results, reset, input, home }) {
  
  return (
    <>
        <textarea
        className="answer"
        id=""
        cols="30"
        rows="10"
        placeholder="type something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={start}>
        Start
      </button>
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
      <button className="home-btn" onClick={home}>
        Home
      </button>

      <h3>{results}</h3>
    </>
  );
}

export default Translation;
