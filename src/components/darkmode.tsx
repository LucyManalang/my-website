import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { useLocalStorage } from 'react-use';
import React from 'react';

export default function DarkMode() {
  const [dark, toggleDark] = useLocalStorage('darkmode', true);

  return (
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
  );
}
