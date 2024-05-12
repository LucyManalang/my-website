import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      text: '#e3e3e3',
      background: '#1a1a1a',
      primary: '#393e97',
      secondary: '#5387CE',
      accent: '#54AE73',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          text: '#e3e3e3',
          background: '#1a1a1a',
          primary: '#393e97',
          secondary: '#5387CE',
          accent: '#54AE73',
        },
      },
    ],
  },
};
export default config;
