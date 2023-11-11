import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessGrid({ words, answer }) {
  const numOfRows = range(0, NUM_OF_GUESSES_ALLOWED, 1);
  const numOfColumns = range(0, 5, 1);

  return (
    <div className="guess-results">
      {numOfRows.map((_row, index) => (
        <p className="guess" key={index}>
          {words[index]
            ? checkGuess(words[index].answerWritten, answer).map(
                ({ letter, status }, i) => (
                  <span
                    key={`${i}-${letter}-${words[index].id}`}
                    className={`cell ${
                      status === "correct"
                        ? "correct"
                        : status === "incorrect"
                        ? "incorrect"
                        : "misplaced"
                    }`}
                  >
                    {letter}
                  </span>
                )
              )
            : numOfColumns.map((_column, index) => (
                <span key={index} className="cell"></span>
              ))}
        </p>
      ))}
    </div>
  );
}

export default GuessGrid;
