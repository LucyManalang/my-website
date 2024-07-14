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
    }
  };

  const columns = useCallback(
    (row: number[], rowIndex: number) => {
      return row.map((col, colIndex) => {
        const value = board[rowIndex][colIndex]
          ? board[rowIndex][colIndex]
          : '';
        return (
          <input
            onChange={handleValueChange}
            name={`${rowIndex}-${colIndex}`}
            key={`${rowIndex}-${colIndex}`}
            type="number"
            min="1"
            step="1"
            max="9"
            className={clsx(
              'flex items-center justify-center w-10 h-10 border-[0.5px] border-neutral/15 text-center bg-transparent',
              {
                'border-r-2 !border-r-neutral/100':
                  (colIndex + 1) % 3 === 0 && colIndex !== 8,
              },
            )}
            defaultValue={value}
            value={value}
            autoComplete="off"
          />
        );
      });
    },
    [board],
  );

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
  console.log(JSON.stringify(board, null));
  return (
    <div className="w-min">
      <div className="w-min">
        {board.map((row, rowIndex) => (
          <div
            id={`${rowIndex}`}
            className={clsx('flex flex-row', {
              'border-b-2': (rowIndex + 1) % 3 === 0 && rowIndex !== 8,
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
