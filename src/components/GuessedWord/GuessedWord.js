import React from "react";

function GuessedWord({ words }) {
  return (
    <div className="guess-results">
      {words.map((word) => (
        <p key={word.id} className="guess">
          {word.answer}
        </p>
      ))}
    </div>
  );
}

export default GuessedWord;
