// This code was created by shinjanpatra on https://www.geeksforgeeks.org/sudoku-backtracking-7/.
// It is a general translation of my code from java

// Bitmasks for each row/column/box
let row = new Array(9);
let col = new Array(9);
let box = new Array(9);
let set = false;

// Utility function to find the box index
// of an element at position [i][j] in the grid
function getBox(i: number, j: number) {
  return Math.floor(i / 3) * 3 + Math.floor(j / 3);
}

// Utility function to check if a number
// is present in the corresponding row/column/box
function isSafe(i: number, j: number, number: number) {
  return (
    !((row[i] >> number) & 1) &&
    !((col[j] >> number) & 1) &&
    !((box[getBox(i, j)] >> number) & 1)
  );
}

// Utility function to set the initial values of a Sudoku board
// (map the values in the bitmasks)
function setInitialValues(grid: number[][]) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      (row[i] |= 1 << grid[i][j]),
        (col[j] |= 1 << grid[i][j]),
        (box[getBox(i, j)] |= 1 << grid[i][j]);
    }
  }
}

/* Takes a partially filled-in grid and attempts
to assign values to all unassigned locations in
such a way to meet the requirements for
Sudoku solution (non-duplication across rows,
columns, and boxes) */
function SolveSudoku(grid: number[][], i: number, j: number) {
  if (!set) {
    (set = true), setInitialValues(grid);
  }

  if (i == 9 - 1 && j == 9) return true;
  if (j == 9) {
    j = 0;
    i++;
  }

  if (grid[i][j]) return SolveSudoku(grid, i, j + 1);

  for (let nr = 1; nr <= 9; nr++) {
    if (isSafe(i, j, nr)) {
      /* Assign nr in the
				current (i, j)
				position and
				add nr to each bitmask
			*/
      grid[i][j] = nr;
      row[i] |= 1 << nr;
      col[j] |= 1 << nr;
      box[getBox(i, j)] |= 1 << nr;

      if (SolveSudoku(grid, i, j + 1)) return true;

      // Remove nr from each bitmask
      // and search for another possibility
      row[i] &= ~(1 << nr);
      col[j] &= ~(1 << nr);
      box[getBox(i, j)] &= ~(1 << nr);
    }

    grid[i][j] = 0;
  }

  return false;
}

export default function Solve(grid: number[][]) {
  return SolveSudoku(grid, 0, 0);
}

// Utility function to print the solved grid
// function print(grid : number[][] | string[][]) {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       document.write(grid[i][j], ' ');
//     }
//     document.write('</br>');
//   }
// }

// Driver Code

// 0 means unassigned cells
let grid = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

// if (Solve(grid)) print(grid);
// else document.write('No solution exists', '</br>');
