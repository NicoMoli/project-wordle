import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputWord from "../InputWord/InputWord";
import GuessGrid from "../GuessGrid/GuessGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answerWritten, setAnswerWritten] = React.useState("");
  const [words, setWords] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  const handleSubmitWord = (e) => {
    e.preventDefault();
    setAnswerWritten("");
    setWords((prevWords) => [
      ...prevWords,
      { answerWritten, id: crypto.randomUUID() },
    ]);
    if (answerWritten === answer) {
      setGameStatus("won");
    } else if (
      answerWritten !== answer &&
      words.length === NUM_OF_GUESSES_ALLOWED - 1
    ) {
      setGameStatus("lost");
    }
  };

  const handleSetAnswer = (value) => {
    setAnswerWritten(value);
  };

  return (
    <>
      <GuessGrid words={words} answer={answer} />
      <InputWord
        answerWritten={answerWritten}
        handleSetAnswer={handleSetAnswer}
        handleSubmitWord={handleSubmitWord}
        gameStatus={gameStatus}
        words={words}
        correctAnswer={answer}
      />
    </>
  );
}

export default Game;
