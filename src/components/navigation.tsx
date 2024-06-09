import DarkMode from '../components/darkmode';
import { HiMenuAlt2 } from 'react-icons/hi';
import Link from 'next/link';
import React from 'react';

export default function Navigation() {
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

  return (
    <nav className="fixed top-0 w-screen border-b-2 border-secondary bg-base-200 drop-shadow-lg">
      <div className="flex flex-row flex-nowrap justify-between mx-3 my-1">
        <Link href="/">
          <h1 className="text-3xl flex justify-center items-center">
            manalang.me
          </h1>
        </Link>
        <div className="flex flex-row items-center ">
          <DarkMode />
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
}
