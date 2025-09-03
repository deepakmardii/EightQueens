import { useState } from 'react';

const App = () => {
  // State to track queen positions on the board
  const [board, setBoard] = useState(() => {
    const initialBoard = [];
    for (let row = 0; row < 8; row++) {
      const boardRow = [];
      for (let col = 0; col < 8; col++) {
        boardRow.push(false); // false = no queen, true = queen
      }
      initialBoard.push(boardRow);
    }
    return initialBoard;
  });

  // Handle clicking on a square
  const handleSquareClick = (row: number, col: number) => {
    const newBoard = board.map((boardRow, rowIndex) =>
      boardRow.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return !cell; // Toggle queen on this square
        }
        return cell;
      })
    );
    setBoard(newBoard);
  };

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
                hover:bg-blue-200
              `}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              {cell && (
                <span className="text-3xl">♛</span>
              )}
            </div>
          ))
        )}
      </div>

      <div className="mt-6 text-gray-600">
        Click on squares to place or remove queens
      </div>
    </div>
  );
};

export default App;