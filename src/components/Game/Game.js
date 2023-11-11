import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputWord from "../InputWord/InputWord";
import GuessedWord from "../GuessedWord/GuessedWord";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answerWritten, setAnswerWritten] = React.useState("");
  const [words, setWords] = React.useState([]);

  const handleSubmitWord = (e) => {
    e.preventDefault();
    console.info({ answer });
    setAnswerWritten("");
    setWords((prevWords) => [
      ...prevWords,
      { answerWritten, id: crypto.randomUUID() },
    ]);
  };

  const handleSetAnswer = (value) => {
    setAnswerWritten(value);
  };

  return (
    <>
      <Guess words={words} answer={answer} />
      <GuessedWord words={words} />
      <InputWord
        answerWritten={answerWritten}
        handleSetAnswer={handleSetAnswer}
        handleSubmitWord={handleSubmitWord}
      />
    </>
  );
}

export default Game;
