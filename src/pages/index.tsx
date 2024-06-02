import { PiLinkedinLogo, PiGithubLogoLight } from 'react-icons/pi';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { IoFileTrayFullOutline } from 'react-icons/io5';
import { MdFileDownload } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocalStorage } from 'react-use';
import { HiMenuAlt2 } from 'react-icons/hi';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = {
  portrait: '/res/Portrait.jpeg',
  logo: '/res/MacalesterLogo.png',
  boggle: '/res/Boggle.png',
  sudoku: '/res/Sudoku.png',
  betterDocs: '/res/BetterDocs.png',
  geoguessr: '/res/Geoguessr.png',
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

const projects = [
  {
    title: 'Boggle',
    image: images.boggle,
    link: 'https://github.com/LucyManalang/128-Boggle',
    description: 'Play Boggle!',
    id: 1,
  },
  {
    title: 'Sudoku solver',
    image: images.sudoku,
    link: 'https://github.com/LucyManalang/221-Sudoku-Implementation',
    description:
      'Visualize how different Sudoku algorithms step through the problem!',
    id: 2,
  },
  {
    title: 'Better Docs',
    image: images.betterDocs,
    link: 'https://github.com/LucyManalang/Better-Docs',
    description: 'Declutter google docs with this simple arc boost!',
    id: 3,
  },
];

const projectItems = projects.map((project) => (
  <div
    key={project.id}
    className="carousel-item card card-compact w-80 bg-base-100 drop-shadow-md rounded-[10px]"
  >
    <figure className="w-80 h-60 overflow-hidden border-b-2 border-secondary">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-left-top"
        width={320}
        height={240}
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{project.title}</h2>
      <p>{project.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">
          <Link href={project.link} target="_blank">
            See here!
          </Link>
        </button>
      </div>
    </div>
  </div>
));

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

const Navigation = () => {
  const [dark, toggleDark] = useLocalStorage('dark', true);
  return (
    <nav className="fixed top-0 w-screen border-b-2 border-secondary bg-base-200 drop-shadow-lg">
      <div className="flex flex-row flex-nowrap justify-between mx-3 my-1">
        <Link href="/">
          <h1 className="text-3xl flex justify-center items-center">
            manalang.website
          </h1>
        </Link>
        <div className="flex flex-row items-center ">
          <p className="w-8 flex align-middle justify-center hover:text-accent">
            <label className="swap swap-rotate items-center justify-center">
              <input
                type="checkbox"
                className="theme-controller"
                value={'mylight'}
                checked={!dark}
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
          className="px-48 pt-20 h-screen flex flex-wrap-reverse align-center"
        >
          <div className="my-5 max-w-sm">
            <h1>Hi, I{"'"}m Lucy!</h1>
            <div>
              <p className="text-nowrap">
                I{"'"}m a Computer Science and Studio Art student <br /> at
                <Link
                  className="hover:text-secondary"
                  href="https://www.macalester.edu/"
                >
                  {' '}
                  <Image
                    className="w-5 inline"
                    src={images.logo}
                    alt=""
                    width={20}
                    height={20}
                  />
                  Macalester College{' '}
                </Link>
                and I am based in <br />
                Oakland, CA.
              </p>
            </div>
            <div className="m-5">{socialList}</div>
          </div>
          <div>
            <Image
              className="max-w-72 rounded-[5px]"
              src={images.portrait}
              alt="Picture of me"
              width={288}
              height={288}
            />
          </div>
        </div>
        <div id="about-me" className="section bg-base-200">
          <h1>About Me:</h1> <br />
          <h2 className="h-12">Quick Info:</h2>
          <p>
            I am a rising sophomore at Macalester College and I am highly
            motivated and enthusiastic about computer programming. I am
            currently working as an RA and as a lead teacher{"'"}s assistant at
            Macalester College.
          </p>
          <h2 className="h-12">My Skills as a Programmer:</h2>
          <p>
            Through my experience as an artist, I try to apply an artistic eye
            to make programs that are beautiful and follow good UI/UX practices.
            Additionally, I focus on writing readable, expandable, and efficient
            code and unit tests.
          </p>
          <h2 className="h-12">Community:</h2>
          <p>
            I am also very community oriented, as I am an RA for the 2024-2045
            academic year where I have built a community for incoming first-year
            students. I also am co-leading Macalester{"'"}s Class of 2028
            Discord Server and Instagram Page to allow incoming first-years to
            meet each other before the school year begins.
          </p>
          <h2 className="h-12">Work Experience:</h2>
          <ul>
            <li>
              <p>
                Data Structures Preceptor{':'} January 2024 {'→ '}Present
              </p>
            </li>
            <li>
              <p>Data Structures Head Preceptor{':'} Begins August 2024</p>
            </li>
            <li>
              <p>Resident Assistant{':'} Begins August 2024</p>
            </li>
          </ul>
          <h2 className="h-12">Fun Info:</h2>
          <p>
            I enjoy biking {'('}mountain and road{')'}, and I play ultimate
            frisbee on my college club team, the Macalester Purse Snatchers.
            Additionally, I am a highly rated
            <Link
              href="https://www.geoguessr.com/"
              className="hover:text-secondary"
            >
              {' '}
              <Image
                className="w-5 inline pb-[5px]"
                src={images.geoguessr}
                alt=""
                width={20}
                height={20}
              />
              Geoguessr
            </Link>{' '}
            player.
          </p>
          <h2 className="h-12">Resume:</h2>
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
                  <button className="text-lg" onClick={downloadResume}>
                    <MdFileDownload />
                  </button>
                </div>
                <iframe
                  src="/res/Lucy-Manalang-Resume.pdf#toolbar=0"
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
            {projectItems}
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
