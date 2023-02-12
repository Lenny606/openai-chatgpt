import { React, useState } from "react";
import Selection from "./components/Selection";
import Translation from "./components/Translation";
import arrayOptions from "./options/options";
import { Configuration, OpenAIApi } from "openai";

import "./App.css";

function App() {
  //configuration open ai

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_API_Key,
  });

  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [results, setResults] = useState("");

  const selectOption = (option) => {
    //desructuring, adding new input from texarea into option object
    setOption(option);
  };

  const start = async () => {
    let object = { ...option, prompt: input };
    // console.log(object);
    const response = await openai.createCompletion(object);
    setResults(response.data.choices[0].text);
  };

  return (
    <div className="main">
      {/* create elements to display results */}

      {Object.values(option).length === 0 ? (
        <Selection arrayOptions={arrayOptions} selectOption={selectOption} />
      ) : (
        <Translation start={start} results={results} setInput={setInput} />
      )}
    </div>
  );
}

export default App;
