import { useState } from 'react';

export function NumberKeyboard() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  const intialDisplay = '';
  const [currentNumber, setCurrentNumber] = useState(intialDisplay);

  const handleNumberClick = (number) => {
    const newNumber = currentNumber + number;
    setCurrentNumber(newNumber);
  };

  const handleDeleteClick = () => {
    const newNumber = currentNumber.slice(0, -1);
    setCurrentNumber(newNumber);
  };

  return (
    <>
      <span className="number">{currentNumber}</span>
      <div className="keyboard-container">
        <ol className="keyboard">
          {numbers.map((number) => (
            <li key={number}>
              <button
                type="button"
                className="key"
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleDeleteClick}
              type="submit"
              className="key big"
            >
              delete
            </button>
          </li>
        </ol>
      </div>
    </>
  );
}
