import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import React from 'react';

export default function DarkMode() {
  const [theme, setTheme] = useState('mydark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') ?? 'mydark';
    setTheme(storedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      document.querySelector('html')?.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  const isDark = theme === 'mydark';

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'mydark' : 'mylight');
  };

  if (!mounted) return null;

  return (
    <p className="w-8 flex align-middle justify-center hover:text-accent">
      <label className="swap swap-rotate">
        <input type="checkbox" onChange={handleToggle} checked={isDark} />
        <AiOutlineMoon className="text-xl swap-on" />
        <AiOutlineSun className="text-xl fixed swap-off" />
      </label>
    </p>
  );
}
