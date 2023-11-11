import React from "react";

function InputWord({
  answerWritten,
  handleSetAnswer,
  handleSubmitWord,
  words,
  gameStatus,
  correctAnswer,
}) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitWord}>
      <label htmlFor="guess-input">Enter guess:</label>
      {gameStatus === "playing" ? (
        <input
          id="guess-input"
          type="text"
          value={answerWritten}
          onChange={(e) => handleSetAnswer(e.target.value.toUpperCase())}
          pattern="^[A-Z]{5}$"
          disabled={gameStatus !== "playing"}
        />
      ) : gameStatus === "won" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{words.length} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{correctAnswer}</strong>.
          </p>
        </div>
      )}
    </form>
  );
}

export default InputWord;
