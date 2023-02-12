const arrayOptions = [
  {
    name: "QA",
    id: "qa",
    description: "Answers the question.",
    option: {
      model: "text-davinci-003",
      prompt:
        'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:',
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["input"],
    },
  },
  {
    name: "Text to command",
    id: "txt",
    description: "Translate text into programmatic commands.",
    option: {
      model: "text-davinci-003",
      prompt:
        "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
      temperature: 0,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
      stop: ["input"],
    },
  },
];

export default arrayOptions;
// from openai documentation
