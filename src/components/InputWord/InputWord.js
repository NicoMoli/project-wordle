import React from "react";

function InputWord({ answerWritten, handleSetAnswer, handleSubmitWord }) {
  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmitWord}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={answerWritten}
        onChange={(e) => handleSetAnswer(e.target.value.toUpperCase())}
        pattern="^[A-Z]{5}$"
      />
    </form>
  );
}

export default InputWord;
