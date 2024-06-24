'use client';

import ProjectHeader from '../../components/projectHeader';
import { PiGithubLogoLight } from 'react-icons/pi';
import Image from 'next/image';
import '../../styles/globals.css';
import Link from 'next/link';
import React from 'react';

const Sudoku = () => {
  return (
    <>
      <div className="section">
        <h1>Sudoku</h1>
        <h2>Overview:</h2>
        <p>
          For this implementation, I chose to implement a few different types of
          Sudoku solvers {'('}brute force, greedy, and exact cover{')'} to
          showcase the differences between them. Running the main method in each
          solver class will show a visualization of how the specific algorithm
          steps through the problem in the terminal. You can also change the
          delay variable to change how quickly each step is shown. A delay of 0
          will not display a visualization. There are also short test classes
          written to test the code.
        </p>
        <h2>Implementations:</h2>
        <ul className="list-disc pl-4">
          <li>
            <p>
              Brute force - The basic sudoku solver, essentially guess and
              check. Takes exponential time so don{"'"}t expect to use this to
              solve anything bigger than a 25x25 board.
            </p>
          </li>
          <li>
            <p>
              Greedy solution - Most standard sudoku puzzles have rows, columns,
              or boxes where only one number is possible for a given position at
              all times. This greedy solution takes advantage of that and is
              able to solve most standard puzzles in polynomial time.
            </p>
          </li>
          <li>
            <p>
              Exact cover - This is an optimization of the brute force method by
              reducing sudoku into an{' '}
              <Link
                className="text-nowrap hover:text-secondary"
                href="https://en.wikipedia.org/wiki/Exact_cover"
                target="_blank"
              >
                <Image
                  className="inline pb-[5px]"
                  src="/res/WikipediaLogo.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Exact Cover
              </Link>{' '}
              problem. I then used{' '}
              <Link
                className="text-nowrap hover:text-secondary"
                href="https://en.wikipedia.org/wiki/Knuth%27s_Algorithm_X"
                target="_blank"
              >
                <Image
                  className="inline pb-[5px]"
                  src="/res/WikipediaLogo.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Knuth{"'"}s Algorithm X{' '}
              </Link>
              as my implementation. While this is method still takes exponential
              time, it is a substantial optimizaion. The exact cover solver
              follows the same steps as the greedy solver, so it is not
              displayed below.
            </p>
          </li>
        </ul>
        <h2>Showcase:</h2>
        <div className="inline-flex gap-5">
          <div>
            <p>Brute Force Solver:</p>
            <Image
              className="rounded-lg"
              src="/res/BruteForce.gif"
              alt="Brute force sudoku solver"
              width={200}
              height={200}
            ></Image>
          </div>
          <div>
            <p>Greedy Solver:</p>
            <Image
              className="rounded-lg"
              src="/res/Greedy.gif"
              alt="Greedy sudoku solver"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>
        <div className="pt-5 text-text text-4xl hover:text-secondary">
          <Link href="" target="_blank">
            <PiGithubLogoLight />
          </Link>
        </div>
      </div>
      <ProjectHeader />
    </>
  );
};

export default Sudoku;
