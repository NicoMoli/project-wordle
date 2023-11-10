import React from "react";

function InputWord({ answer, handleSetAnswer, handleSubmitWord }) {
  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmitWord}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={answer}
        onChange={(e) => handleSetAnswer(e.target.value.toUpperCase())}
        pattern="^[A-Z]{5}$"
      />
    </form>
  );
}

export default InputWord;
