import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputWord from "../InputWord/InputWord";
import GuessedWord from "../GuessedWord/GuessedWord";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState("");
  const [words, setWords] = React.useState([]);

  const handleSubmitWord = (e) => {
    e.preventDefault();
    console.info({ answer });
    setAnswer("");
    setWords((prevWords) => [
      ...prevWords,
      { answer, id: crypto.randomUUID() },
    ]);
  };

  const handleSetAnswer = (value) => {
    setAnswer(value);
  };

  return (
    <>
      <GuessedWord words={words} />
      <InputWord
        answer={answer}
        handleSetAnswer={handleSetAnswer}
        handleSubmitWord={handleSubmitWord}
      />
    </>
  );
}

export default Game;
