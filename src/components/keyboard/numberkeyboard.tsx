export function NumberKeyboard() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number) => (
          <li key={number}>
            <button className="key">{number}</button>
          </li>
        ))}
        <li>
          <button className="key big">delete</button>
        </li>
      </ol>
    </div>
  );
}
