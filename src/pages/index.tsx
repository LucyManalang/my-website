import Image from 'next/image';
import { useLocalStorage } from 'react-use';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { PiLinkedinLogo, PiGithubLogoLight } from 'react-icons/pi';
import { HiMenuAlt2 } from 'react-icons/hi';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const images = {
  portrait: '/portrait.jpeg',
  logo: '/macalesterlogo.png',
};

const socials = [
  {
    logo: <PiLinkedinLogo />,
    link: 'https://linkedin.com/in/lucy-manalang-5905582b4',
    id: 1,
  },
  {
    logo: <PiGithubLogoLight />,
    link: 'https://github.com/LucyManalang',
    id: 2,
  },
];

const socialItems = socials.map((item) => (
  <li key={item.id} className="text-text text-6xl hover:text-secondary">
    <Link href={item.link} target="_blank">
      {item.logo}
    </Link>
  </li>
));

const socialList = <ul className="inline-flex">{socialItems}</ul>;

const Navigation = () => {
  const navItems = [
    { name: 'About', tag: '#about-me', id: 1 },
    { name: 'Projects', tag: '#projects', id: 2 },
    { name: 'Contact', tag: '#contact', id: 3 },
  ];

  const navList = navItems.map((item) => (
    <li key={item.id}>
      <Link
        onClick={(evt) => {
          evt.preventDefault();
          document
            .querySelector(item.tag)
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        href={item.tag}
      >
        <p className="h-max flex align-middle justify-center">{item.name}</p>
      </Link>
    </li>
  ));

  const [dark, toggleDark] = useLocalStorage('dark', true);

  return (
    <nav className="fixed top-0 w-screen border-b-2 border-secondary bg-base-200 drop-shadow-lg">
      <div className="flex flex-row flex-nowrap justify-between mx-3 my-1">
        <Link href="/">
          <h1 className="text-3xl flex justify-center items-center">
            manalang.dev
          </h1>
        </Link>
        <div className="flex flex-row items-center ">
          <p className="w-8 flex align-middle justify-center hover:text-accent">
            <label className="swap swap-rotate items-center justify-center">
              <input
                type="checkbox"
                className="theme-controller"
                value={'mylight'}
                checked={dark}
                onChange={() => toggleDark(!dark)}
              />
              <AiOutlineSun className="text-xl fixed swap-off" />
              <AiOutlineMoon className="text-xl swap-on" />
            </label>
          </p>
          <details id="nav-mobile" className="dropdown dropdown-end">
            <summary className="shadow-none m-1 btn text-xl">
              <HiMenuAlt2 />
            </summary>
            <ul className="p-2 menu dropdown-content bg-base-100 rounded-box">
              {navList}
            </ul>
          </details>
          <ul id="nav-desktop" className="p-2 menu bg-base-200 flex flex-row">
            {navList}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <>
      <main className="flex flex-col">
        <div id="hero" className="px-40 pt-64 h-screen flex flex-wrap-reverse">
          <div className="max-w-sm">
            <h1>Hi, I{"'"}m Lucy!</h1>
            <div>
              <p className="text-nowrap">
                I{"'"}m a Computer Science and Studio Art student <br /> at
                <Link
                  className="hover:text-secondary"
                  href="https://www.macalester.edu/"
                >
                  {' '}
                  <img className="w-5 inline" src={images.logo} />
                  Macalester College{' '}
                </Link>
                and I am based in <br />
                Oakland, CA.
              </p>
            </div>
            <div className="m-5">{socialList}</div>
          </div>
          <div>
            <img
              className="max-w-72 rounded-[15px]"
              src={images.portrait}
              alt="Picture of me"
            />
          </div>
        </div>
        <div id="about-me" className="px-40 py-28 bg-base-200">
          <h1>About Me:</h1> <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            cum doloribus autem porro odio, dicta facilis reprehenderit dolor
            dolore numquam assumenda ipsam eveniet placeat, veniam velit
            possimus deserunt eaque vel.
          </p>
        </div>
        <div id="projects" className="px-40 py-28">
          <h1>Projects:</h1> <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            cum doloribus autem porro odio, dicta facilis reprehenderit dolor
            dolore numquam assumenda ipsam eveniet placeat, veniam velit
            possimus deserunt eaque vel.
          </p>
        </div>
        <div id="contact" className="px-40 py-28 bg-base-200">
          <h1>Contact Me:</h1>
          <p>
            Feel free to send me a message over LinkedIn or take a look at my
            GitHub!
          </p>
          <div className="m-5">{socialList}</div>
          <br />
        </div>
      </main>
      <Navigation />
    </>
  );
};

export default App;
