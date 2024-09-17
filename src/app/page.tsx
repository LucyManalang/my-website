'use client';

import { IoFileTrayFullOutline } from 'react-icons/io5';
import { PiLinkedinLogo, PiGithubLogoLight } from 'react-icons/pi';
import { MdFileDownload } from 'react-icons/md';
import { CgArrowsExpandRight } from 'react-icons/cg';
import { IoIosArrowBack } from 'react-icons/io';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Projects from '../components/projects';
import '../styles/globals.css';
import Navigation from '../components/navigation';

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

const socialList = (
  <ul className="inline-flex">
    {socials.map((item) => (
      <li key={item.id} className="text-text text-6xl hover:text-secondary">
        <Link href={item.link} target="_blank">
          {item.logo}
        </Link>
      </li>
    ))}
  </ul>
);

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const downloadResume = () => {
    const pdfUrl = '/res/Lucy-Manalang-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Lucy-Manalang-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <main className="flex flex-col">
        <div
          id="hero"
          className="px-48 pt-20 h-screen min-h-[708px] flex flex-wrap-reverse align-center"
        >
          <div className="my-5 max-w-sm">
            <h1>Hi, I{"'"}m Lucy!</h1>
            <div>
              <p>
                I{"'"}m a Computer Science and Studio Art student at{' '}
                <Link
                  className="hover:text-secondary"
                  href="https://www.macalester.edu/"
                  target="_blank"
                >
                  <Image
                    className="inline pb-[5px]"
                    src="/res/MacalesterLogo.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Macalester College{' '}
                </Link>
                and I am from Oakland, CA.
              </p>
            </div>
            <div className="m-5">{socialList}</div>
          </div>
          <div>
            <Image
              className="max-w-72 rounded-[5px]"
              src="/res/Portrait.jpeg"
              alt="Picture of me"
              width={288}
              height={288}
            />
          </div>
        </div>
        <div id="about-me" className="section bg-base-200">
          <h1>About Me:</h1> <br />
          <h2>Quick Info:</h2>
          <p>
            I am a sophomore at Macalester College and I am highly motivated and
            enthusiastic about computer programming. I am currently working as
            an RA and as a head teacher{"'"}s assistant at Macalester College.
          </p>
          <h2>My Skills as a Programmer:</h2>
          <p>
            Through my experience as an artist, I try to apply an artistic eye
            to make programs that are beautiful and follow good UI/UX practices.
            Additionally, I focus on writing readable, expandable, and efficient
            code and unit tests.
          </p>
          <h2>Community:</h2>
          <p>
            I am also very community oriented, as I am an RA for the 2024-2045
            academic year where I have fostered a community for incoming
            first-year students. I also am co-leading Macalester{"'"}s Class of
            2028 Discord Server and Instagram Page to allow incoming first-years
            to meet each other before the school year begins.
          </p>
          <h2>Work Experience:</h2>
          <ul className="list-disc pl-4">
            <li>
              <p>
                Chipotle{':'} January 2023 {'→ '}August 2023
              </p>
            </li>
            <li>
              <p>
                Data Structures Preceptor{':'} January 2024 {'→ '}May 2024
              </p>
            </li>
            <li>
              <p>
                Data Structures Head Preceptor{':'} August 2024 {'→ '}Present
              </p>
            </li>
            <li>
              <p>
                Resident Assistant{':'} August 2024 {'→ '}Present
              </p>
            </li>
          </ul>
          <h2>Fun Info:</h2>
          <p>
            I enjoy biking {'('}mountain and road{')'}, and I play ultimate
            frisbee on my college club team, the Macalester Purse Snatchers.
            Additionally, I am a highly rated
            <Link
              href="https://www.geoguessr.com/"
              className="hover:text-secondary"
              target="_blank"
            >
              {' '}
              <Image
                className="inline pb-[5px]"
                src="/res/Geoguessr.png"
                alt=""
                width={20}
                height={20}
              />
              Geoguessr
            </Link>{' '}
            player.
          </p>
          <h2>Resume:</h2>
          <button
            className="btn w-fit text-xl my-2 bg-base-100"
            onClick={handleOpenModal}
          >
            <IoFileTrayFullOutline /> Lucy-Manalang-Resume
          </button>
          {isModalOpen && (
            <dialog className="modal" open>
              <div className="modal-box max-w-full h-screen bg-base-100 pt-5">
                <div className="flex justify-between items-center pb-2">
                  <h3 className="flex items-center gap-2 font-bold text-lg">
                    <button onClick={handleCloseModal}>
                      <IoIosArrowBack />
                    </button>
                    Lucy-Manalang-Resume
                  </h3>
                  <div className="inline-flex gap-2">
                    <button className="text-lg" onClick={downloadResume}>
                      <MdFileDownload />
                    </button>
                    <Link href="/resume" target="_blank">
                      <CgArrowsExpandRight />
                    </Link>
                  </div>
                </div>
                <iframe
                  src="/res/Lucy Manalang Resume.pdf#toolbar=0"
                  width="100%"
                  height="95%"
                  className="rounded-md"
                ></iframe>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button onClick={handleCloseModal}>close</button>
              </form>
            </dialog>
          )}
        </div>
        <div id="projects" className="section">
          <h1>Projects:</h1> <br />
          <div className="carousel carousel-center w-full p-4 space-x-4 bg-base-200 rounded-[10px] drop-shadow-lg">
            <Projects />
          </div>
        </div>
        <div id="contact" className="section bg-base-200">
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
