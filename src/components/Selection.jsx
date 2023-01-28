import React from "react";

const Selection = ({ arrayOptions, selectOption }) => {
  console.log(arrayOptions);
  return (
    <>
      <h1 className="header">OPENAI APP</h1>
      <div className="optionsList">
        {arrayOptions.map((item) => {
          return (
            <div className="option" onClick={() => selectOption(item.option)}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Selection;
