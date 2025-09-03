const App = () => {
  // Create an 8x8 board
  const createBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      const boardRow = [];
      for (let col = 0; col < 8; col++) {
        boardRow.push(false); // false = no queen, true = queen
      }
      board.push(boardRow);
    }
    return board;
  };

  const board = createBoard();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">8 Queens Problem</h1>

      <div className="grid grid-cols-8 gap-0 border-2 border-gray-800">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`
                w-16 h-16 flex items-center justify-center cursor-pointer
                ${(rowIndex + colIndex) % 2 === 0 ? 'bg-white' : 'bg-gray-400'}
              `}
            >
              {/* Empty for now - queens will be added later */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;