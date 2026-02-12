'use client';

import { PiGithubLogoLight } from 'react-icons/pi';

import Link from 'next/link';
import React from 'react';

import '../../styles/globals.css';
import ProjectNav from '../../components/projectNav';

const AnoteDeliverable = () => {
  return (
    <>
      <div className="section">
        <h1>Anote (2B Deliverable)</h1>
        <h2>Overview:</h2>
        <p>
          Anote is a note-taking and annotation tool created as a 2B
          deliverable. The project focuses on letting users create, organize,
          and annotate notes efficiently with a minimal interface.
        </p>

        <h2>Features:</h2>
        <p>
          <ul className="list-disc pl-4">
            <li>Quick note creation and tagging</li>
            <li>Annotation tools for highlighting and commenting</li>
            <li>Organization via folders or tags</li>
          </ul>
        </p>

        <div className="pt-5 w-min text-text text-4xl">
          <Link
            className="hover:text-secondary"
            href="https://github.com/LucyManalang/Anote-2B-Deliverable"
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

export default AnoteDeliverable;
