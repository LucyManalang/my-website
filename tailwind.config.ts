import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mydark: {
          'primary': '#393e97',
          'secondary': '#5387CE',
          'accent': '#54AE73',
          'neutral': '#e3e3e3',
          'base-100': '#1a1a1a',
          'base-200': '151515',
        },
        mylight: {
          'primary': '#676cc5',
          'secondary': '#5387CE',
          'accent': '#50aa6f',
          'neutral': '#1c1c1c',
          'base-100': '#e6e6e6',
          'base-200': '#D4D4D4',
        },
      },
    ],
  },
};
export default config;
