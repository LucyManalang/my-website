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
import Contacts from '../components/contacts';

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
      <li key={item.id} className="text-text text-5xl hover:text-secondary">
        <Link href={item.link} target="_blank">
          {item.logo}
        </Link>
      </li>
    ))}
  </ul>
);

const App = () => {
  // TODO: Resume page
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
            I am a junior at Macalester College and I am highly motivated and
            enthusiastic about computer programming. I am currently working as
            an Research Assistant and a head teacher{"'"}s assistant at
            Macalester College. I am also a fellow at Cornell Tech{"'"}s Break
            Through Tech AI Fellowship.
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
            I am also very community oriented, as I was an RA for the 2024-2045
            academic year where I fostered a community for incoming first-year
            students. I also am co-leading Macalester{"'"}s Class of 2028
            Discord Server and Instagram Page to allow incoming first-years to
            meet each other before the school year begins.
          </p>
          {/* <h2>Work Experience:</h2>
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
                Resident Assistant{':'} August 2024 {'→ '}May 2025
              </p>
            </li>
            <li>
              <p>
                Research Assistant{':'} May 2025 {'→ '}August 2025
              </p>
            </li>
            <li>
              <p>
                Data Structures Head Preceptor{':'} August 2024 {'→ '}Present
              </p>
            </li>
            <li>
              <p>
                Student Fellow at Cornell Tech{':'} May 2025 {'→ '}Present
              </p>
            </li>
          </ul> */}
          <h2>Fun Info:</h2>
          <p>
            I enjoy biking {'('}mountain and road{')'}, and I play ultimate
            frisbee on my college club team, the Macalester PurseSnatchers.
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
        </div>
        <div id="resume" className="section">
          <h1>Resume:</h1> <br />
          <p>
            Here is an overview of my resume. View or download the full resume
            below for more details.
          </p>
          <h2>Education:</h2>
          <ul className="list-disc pl-4">
            <li className="ml-1">
              <p>
                <strong>Macalester College</strong>, St. Paul, MN
              </p>
            </li>
            <li className="ml-5">
              <p>B.A. in Computer Science, Minor in Studio Art</p>
            </li>
            <li className="ml-5">
              <p>Expected Graduation: May 2027 | GPA: 3.84</p>
            </li>
            <li className="ml-5">
              <p>
                Lealtad Merit Scholar | Dean’s List (Fall 2023, Fall 2024,
                Spring 2025)
              </p>
            </li>
            <li className="ml-1 mt-2">
              <p>
                <strong>Cornell University</strong> (Online)
              </p>
            </li>
            <li className="ml-5">
              <p>
                Certificate in Machine Learning Foundations (May 2025 – August
                2025)
              </p>
            </li>
          </ul>
          <h2>Experience:</h2>
          <ul className="list-disc pl-4">
            <li className="ml-1">
              <p>
                <strong>AI/ML Fellow</strong>, Break Through Tech – Anote AI
                (Remote)
              </p>
            </li>
            <li className="ml-5">
              <p>May 2025 – Present</p>
            </li>
            <li className="ml-5">
              <p>
                Selected from 2000+ applicants for Cornell Tech’s AI program.
                Collaborating with 8 fellows and a startup team to optimize
                financial AI models.
              </p>
            </li>

            <li className="ml-1 mt-3">
              <p>
                <strong>Head Teaching Assistant – Data Structures</strong>,
                Macalester College
              </p>
            </li>
            <li className="ml-5">
              <p>January 2024 – Present</p>
            </li>
            <li className="ml-5">
              <p>
                Manage and train 4 TAs, hold weekly office hours, and review
                student projects via GitHub Pull Requests.
              </p>
            </li>

            <li className="ml-1 mt-3">
              <p>
                <strong>Research Assistant</strong>, Macalester College &
                University of Minnesota
              </p>
            </li>
            <li className="ml-5">
              <p>May 2025 – August 2025</p>
            </li>
            <li className="ml-5">
              <p>
                Developed features for an Extended Reality (XR) Drawing App,
                implementing observation-based 2D–3D interaction tools.
              </p>
            </li>

            <li className="ml-1 mt-3">
              <p>
                <strong>Resident Assistant</strong>, Macalester College
              </p>
            </li>
            <li className="ml-5">
              <p>August 2024 – May 2025</p>
            </li>
            <li className="ml-5">
              <p>
                Mentored 40+ first-year students and advocated for dorm privacy
                improvements through successful policy implementation.
              </p>
            </li>
          </ul>
          <h2>Projects:</h2>
          <ul className="list-disc pl-4">
            <li className="ml-1">
              <p>
                <strong>AI-Powered Personal Trainer</strong> | Python, OpenAI
                API
              </p>
            </li>
            <li className="ml-5">
              <p>Jan 2026 – Feb 2026</p>
            </li>
            <li className="ml-5">
              <p>
                Built adaptive training plans using fitness tracker API data
                (HRV, sleep, recovery, training load) and LLM-powered
                performance analysis.
              </p>
            </li>

            <li className="ml-1 mt-3">
              <p>
                <strong>Multimodal RAG Chatbot for Anote AI</strong> | Python,
                Ollama
              </p>
            </li>
            <li className="ml-5">
              <p>Sept 2025 – Dec 2025</p>
            </li>
            <li className="ml-5">
              <p>
                Built a multimodal RAG system using hybrid retrieval (BM25 +
                embeddings) with modular architecture and cited responses.
              </p>
            </li>
          </ul>
          <h2>Technical Skills:</h2>
          <ul className="list-disc pl-4">
            <li className="ml-1">
              <p>
                <strong>Languages:</strong> Java, Python, C, Swift, C#,
                JavaScript, HTML/CSS, SQL
              </p>
            </li>
            <li className="ml-1">
              <p>
                <strong>Frameworks & Libraries:</strong> React, Node.js,
                PyTorch, pandas, NumPy, JUnit, TailwindCSS
              </p>
            </li>
            <li className="ml-1">
              <p>
                <strong>Developer Tools:</strong> Git, Unity, Figma, Bash
              </p>
            </li>
          </ul>
          <button
            className="btn w-fit text-xl my-2 bg-base-200"
            onClick={handleOpenModal}
          >
            <IoFileTrayFullOutline /> View or download full resume
          </button>
          {isModalOpen && (
            <dialog className="modal" open>
              <div className="modal-box max-w-full h-screen bg-base-200 pt-5">
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
        <div id="projects" className="section bg-base-200">
          <h1>Projects:</h1> <br />
          <p>Swipe left to see my projects!</p>
          <div className="carousel carousel-center w-full p-4 space-x-4 bg-base-100 rounded-[10px] drop-shadow-lg mt-2">
            <Projects />
          </div>
        </div>
        <div id="contact" className="relative section">
          <h1>Contact Me:</h1>
          <p>
            Feel free to connect with me on LinkedIn, look at my GitHub, or
            contact me via email:{' '}
          </p>
          <div className="p-2">
            <Contacts />
          </div>
          <footer className="footer footer-center pt-8">
            <p>&copy; {new Date().getFullYear()} Lucy Manalang</p>
          </footer>
        </div>
      </main>
      <Navigation />
    </>
  );
};

export default App;
