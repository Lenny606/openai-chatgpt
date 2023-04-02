import React from "react";

function Translation({ start, setInput, results, reset, input }) {
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

      <h3>{results}</h3>
    </>
  );
}

export default Translation;
