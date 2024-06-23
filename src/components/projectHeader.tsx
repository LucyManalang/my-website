import { IoIosArrowBack } from 'react-icons/io';
import DarkMode from '../components/darkmode';
import Link from 'next/link';
import React from 'react';

export default function ProjectHeader() {
  return (
    <nav className="fixed top-0 w-screen border-b-2 border-secondary bg-base-200 drop-shadow-lg h-12 flex items-center">
      <div className="flex justify-between w-screen px-8">
        <Link href="../#projects">
          <div className="p-2 flex items-center rounded-md hover:bg-base-100">
            <p>
              <IoIosArrowBack />
            </p>
          </div>
        </Link>
        <DarkMode />
      </div>
    </nav>
  );
}
