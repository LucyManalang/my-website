import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

import Solve from './solver';

const emptyBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const Sudoku: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(
    emptyBoard.map((row) => [...row]),
  );

  const handleSolve = () => {
    const newBoard = [...board];
    if (Solve(newBoard)) {
      setBoard(newBoard);
    } else {
      alert('No solution found');
      window.location.reload();
    }
  };

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const [rowIndex, colIndex] = name.split('-');
      const newBoard = [...board];
      newBoard[Number(rowIndex)][Number(colIndex)] = Number(
        value === '' ? 0 : value.slice(0, 1),
      );
      setBoard(newBoard);
    },
    [board],
  );

  const columns = useCallback(
    (row: number[], rowIndex: number) => {
      return row.map((col, colIndex) => {
        const value = board[rowIndex][colIndex]
          ? board[rowIndex][colIndex]
          : '';
        return (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={clsx(
              'flex items-center justify-center w-9 h-9 border-[0.5px] border-neutral/15 text-center bg-transparent rounded-none',
              {
                'border-r-2 border-r-neutral/80':
                  (colIndex + 1) % 3 === 0 && colIndex !== 8,
              },
            )}
          >
            <input
              onChange={handleValueChange}
              name={`${rowIndex}-${colIndex}`}
              key={`${rowIndex}-${colIndex}`}
              type="number"
              min="1"
              step="1"
              max="9"
              className="flex align-center justify-center text-center w-full h-full border-none bg-transparent outline-none"
              defaultValue={value}
              value={value}
              autoComplete="off"
            />
          </div>
        );
      });
    },
    [board, handleValueChange],
  );

  return (
    <div className="w-min mt-2">
      <div className="w-min">
        {board.map((row, rowIndex) => (
          <div
            key={rowIndex}
            id={`${rowIndex}`}
            className={clsx('flex flex-row', {
              'border-b-2 border-b-neutral/80':
                (rowIndex + 1) % 3 === 0 && rowIndex !== 8,
            })}
          >
            {columns(row, rowIndex)}
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <button className="btn btn-primary" onClick={handleSolve}>
          Solve
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setBoard(emptyBoard);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
