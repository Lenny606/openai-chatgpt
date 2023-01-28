import React from "react";

function Translation({ start, setInput, results }) {
  return (
    <>
      <textarea
        className="answer"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={start}>
        Start
      </button>
      <button className="reset-btn">Reset</button>

      <h3>{results}</h3>
    </>
  );
}

export default Translation;
