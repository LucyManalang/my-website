'use client';

import { PiGithubLogoLight } from 'react-icons/pi';

import Link from 'next/link';
import React from 'react';

import '../../styles/globals.css';
import ProjectNav from '../../components/projectNav';

const PersonalTrainer = () => {
  return (
    <>
      <div className="section">
        <h1>Personal Trainer</h1>
        <h2>Overview:</h2>
        <p>
          This project is a personal trainer application to help users plan
          workouts, track progress, and manage routines. It includes features
          for logging exercises, tracking sets/reps, and viewing progress over
          time.
        </p>

        <h2>Features:</h2>
        <p>
          <ul className="list-disc pl-4">
            <li>Workout builder with customizable exercises and sets</li>
            <li>Progress tracking and history</li>
            <li>Simple UI for quick logging</li>
          </ul>
        </p>

        <div className="pt-5 w-min text-text text-4xl">
          <Link
            className="hover:text-secondary"
            href="https://github.com/LucyManalang/Personal-Trainer"
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

export default PersonalTrainer;
