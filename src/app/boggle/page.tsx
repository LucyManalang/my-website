'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import '../../styles/globals.css';
import ProjectNav from '../../components/projectNav';

const Boggle = () => {
  return (
    <>
      <div className="section">
        <h1>Boggle!</h1>
        <h2>Overview:</h2>
        <p>
          For our final project in COMP 128, {'('}Data Structures{')'}, I worked
          with May Kinnamon and Miri Leonard to create our own version of Parker
          Brother{"'"}s word game, <i>Boggle!</i>. Boggle is a game where
          players shake a board filled with dice that land on random letters,
          creating a 4x4 board of letters. The players then have a set amount of
          time to find all words they can on the board by connecting letters on
          the adjacent dice {'('}including diagonally{')'} while never using the
          same dice twice in a single word. In multiplayer games, players are
          scored based on how many unique 3 or more letter words they got and
          are awarded more points for longer words. <br /> <br />
          Boggle is normally meant to be played using a pencil and paper {'('}
          along with the dice{')'}, so we wanted to create a digital version of
          the game with extra features for the players. This project was coded
          using Java and{' '}
          <Link
            className="text-nowrap hover:text-secondary"
            href="https://mac-comp127.github.io/kilt-graphics/edu/macalester/graphics/package-summary.html"
            target="_blank"
          >
            <Image
              className="inline pb-[5px]"
              src="/res/MacalesterLogo.png"
              alt=""
              width={20}
              height={20}
            />
            Macalester Kilt Graphics
          </Link>
          .
        </p>
        <h2>Features:</h2>
        <ul className="list-disc pl-4">
          <li>
            <p>
              Seed: Using our seed feature, multiple users can play with the
              same seed. This was a simple solution for multiplayer, as an
              online multiplayer was not necessary for our project guidelines.
            </p>
          </li>
          <li>
            <p>
              Solver: We created a solver for Boggle that found every possible
              word using a set dictionary. This helped with scoring and added an
              extra level of complexity to the project.
            </p>
          </li>
          <li>
            <p>
              Score Page: We added a score page to automatically score all words
              a player found.
            </p>
          </li>
        </ul>
        <h2>Showcase:</h2>
        <div className="h-full w-full mt-2">
          <iframe
            src="https://demo.arcade.software/uOX8EPvCVdX29RCuio0l?embed&show_copy_link=true"
            title="Boggle"
            loading="lazy"
            allowFullScreen
            allow="clipboard-write"
            className="arcade top-0 left-0 w-full"
          ></iframe>
        </div>
      </div>
      <ProjectNav />
    </>
  );
};

export default Boggle;
