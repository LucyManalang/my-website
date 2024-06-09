import { IoIosArrowBack } from 'react-icons/io';
import DarkMode from '../components/darkmode';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Boggle = () => {
  return (
    <div className="mb-20">
      <div className="section">
        <h1>Boggle!</h1>
        <h2 className="h-12">Overview:</h2>
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
            className="hover:text-secondary"
            href="https://mac-comp127.github.io/kilt-graphics/edu/macalester/graphics/package-summary.html"
            target="_blank"
          >
            <Image
              className="w-5 inline"
              src="/res/MacalesterLogo.png"
              alt=""
              width={20}
              height={20}
            />
            Macalester Kilt Graphics
          </Link>
          .
        </p>
        <h2 className="h-12">Features:</h2>
        <ul className="list-disc pl-4">
          <li>
            <p>Seed:</p>
          </li>
          <li>
            <p>Solver:</p>
          </li>
          <li>
            <p>Score Page:</p>
          </li>
        </ul>
        <h2 className="h-12">Showcase:</h2>
        {/* <div
          className="relative h-0 w-full"
          //   style={
          //     'position: relative; padding-bottom: calc(76.18556701030927% + 41px); height: 0; width: 100%;'
          //   }
        >
          <iframe
            src="https://demo.arcade.software/uOX8EPvCVdX29RCuio0l?embed&show_copy_link=true"
            title="Boggle"
            loading="lazy"
            allowFullScreen
            allow="clipboard-write"
            className="absolute top-0 left-0 h-fit w-full"
            // style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;"
          ></iframe>
        </div> */}
      </div>
      <div className="flex justify-between w-screen fixed top-8 px-8">
        <Link href="../#projects">
          <p>
            <IoIosArrowBack />
          </p>
        </Link>
        <DarkMode />
      </div>
    </div>
  );
};

export default Boggle;
