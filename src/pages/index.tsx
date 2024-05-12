import Image from 'next/image';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { PiLinkedinLogo, PiGithubLogoLight } from 'react-icons/pi';
import Link from 'next/link';
import React from 'react';

let lightMode = false;

const images = {
  portrait: '/portrait.jpeg',
  logo: '/macalesterlogo.png',
};

function Navigation() {
  return (
    <div id="nav">
      <ul id="nav-bar">
        <Link className="nav-item" href="/">
          <h1>Lucy Manalang</h1>
        </Link>
        <li className="">
          <Link href="">
            <p>
              <button>{lightMode ? <MdDarkMode /> : <MdLightMode />}</button>
            </p>
          </Link>
        </li>
        <li className="">
          <Link href="">
            <p>About</p>
          </Link>
        </li>
        <li className="">
          <Link href="">
            <p>Projects</p>
          </Link>
        </li>
        <li className="">
          <Link href="">
            <p>Content</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="mx-40 my-40 flex flex-col gap-y-96">
        <div className="flex justify-between">
          <div>
            <h1>Hi, I{"'"}m Lucy!</h1>
            <div>
              <p className="text-wrap">
                I{"'"}m a Computer Science and Studio Art student at
                <Link
                  className="hover:text-secondary"
                  href="https://www.macalester.edu/"
                >
                  {' '}
                  <img className="w-5 inline" src={images.logo} />
                  Macalester College{' '}
                </Link>
                based in Oakland, CA.
              </p>
            </div>
          </div>
          <div>
            <img
              className="max-w-72"
              src={images.portrait}
              alt="Picture of me"
            />
          </div>
        </div>
        <div className="">
          <h1>About Me:</h1> <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            cum doloribus autem porro odio, dicta facilis reprehenderit dolor
            dolore numquam assumenda ipsam eveniet placeat, veniam velit
            possimus deserunt eaque vel.
          </p>
        </div>
        <div className="section">
          <h1>Projects:</h1> <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            cum doloribus autem porro odio, dicta facilis reprehenderit dolor
            dolore numquam assumenda ipsam eveniet placeat, veniam velit
            possimus deserunt eaque vel.
          </p>
        </div>
        <div className="contact">
          <div className="section">
            <h1>Contact Me:</h1>
            <PiLinkedinLogo className="text-text text-6xl" />
            <PiGithubLogoLight className="text-text text-6xl" />
            <br />
          </div>
        </div>
      </main>
      <Navigation />
    </>
  );
}
