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
