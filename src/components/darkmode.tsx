import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import React from 'react';

export default function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'mydark');

  const handleToggle = (e: any) => {
    if (e.target.checked) {
      setTheme('mydark');
    } else {
      setTheme('mylight');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme!);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html')?.setAttribute('data-theme', localTheme!);
  }, [theme]);

  return (
    <p className="w-8 flex align-middle justify-center hover:text-accent">
      <label className="swap swap-rotate">
        <input type="checkbox" onChange={handleToggle} />
        <AiOutlineMoon className="text-xl swap-on" />
        <AiOutlineSun className="text-xl fixed swap-off" />
      </label>
    </p>
  );
}
