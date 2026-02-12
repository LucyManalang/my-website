import { useState } from 'react';
import Link from 'next/link';
import React from 'react';

import {
  RiMailSendLine,
  RiGithubLine,
  RiLinkedinBoxLine,
} from 'react-icons/ri';

export default function Contacts() {
  const socials = [
    {
      logo: <RiLinkedinBoxLine />,
      link: 'https://linkedin.com/in/lucy-manalang-5905582b4',
      id: 1,
    },
    {
      logo: <RiGithubLine />,
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

  const [showEmail, setShowEmail] = useState(false);

  const handleClick = () => {
    setShowEmail(true);
  };

  return (
    <div className="inline flex">
      {socialList}
      {showEmail ? (
        <Link
          className="text-text text-5xl hover:text-secondary h-fit font-[50]"
          href={'mailto:lmanalan@macalester.edu'}
        >
          <RiMailSendLine />
        </Link>
      ) : (
        <button
          className="text-text text-5xl hover:text-secondary h-fit"
          title="Click to replace with email link"
          onClick={handleClick}
        >
          <RiMailSendLine />
        </button>
      )}
    </div>
  );
}
