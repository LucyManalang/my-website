import { PiHandSwipeLeft } from 'react-icons/pi';

import Image from 'next/image';
import Link from 'next/link';

const projectList = [
  {
    title: 'Sudoku Solver',
    image: '/res/Sudoku.png',
    link: '/sudoku',
    description:
      'Visualize how different Sudoku solving algorithms step through the problem!',
    id: 1,
  },
  {
    title: 'Boggle!',
    image: '/res/Boggle.png',
    link: '/boggle',
    description: 'Play Boggle!',
    id: 2,
  },
  {
    title: 'Personal Portfolio Website',
    image: '/res/Website.jpeg',
    link: '/website',
    description: 'My personal website!',
    id: 3,
  },
  {
    title: 'Better Docs',
    image: '/res/BetterDocs.png',
    link: 'https://github.com/LucyManalang/Better-Docs',
    description: 'Declutter google docs with this simple arc boost!',
    id: 4,
  },
];

export default function Projects() {
  return projectList.map((project) => (
    <>
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
          <h2 className="card-title h-8">{project.title}</h2>
          <p>{project.description}</p>
          <div className="card-actions justify-end">
            <Link href={project.link} className="btn btn-primary">
              See here!
            </Link>
          </div>
        </div>
      </div>
      <PiHandSwipeLeft className="fixed top-2 left-2" />
    </>
  ));
}
