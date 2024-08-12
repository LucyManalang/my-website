'use client';

import { PiGithubLogoLight } from 'react-icons/pi';

import Link from 'next/link';
import React from 'react';

import '../../styles/globals.css';
import ProjectNav from '../../components/projectNav';
import Projects from '../../components/projects';

const Page = () => {
  return (
    <>
      <div className="section">
        <h1>Personal Portfolio Website</h1>
        <h2>Overview:</h2>
        <p>
          This website was a project for me during the summer of 2024. I used
          this project to learn React, Next.js, and Tailwind CSS. I created this
          website as a portfolio to show my previous projects from both school
          and in my own time. My goal with this website was also to create a
          beautiful and responsive website that showcases my artistic skills.
        </p>
        <h2>See more projects:</h2>
        <div className="carousel carousel-center w-full p-4 space-x-4 bg-base-200 rounded-[10px] drop-shadow-lg mt-2">
          <Projects />
        </div>
        <div className="pt-5 w-min text-text text-4xl">
          <Link
            className="hover:text-secondary"
            href="https://github.com/LucyManalang/my-website"
            target="_blank"
          >
            <PiGithubLogoLight />
          </Link>
        </div>
      </div>
      <ProjectNav />
    </>
  );
};

export default Page;
