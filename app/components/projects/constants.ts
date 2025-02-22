import { BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';

const TECHNOLOGIES = {
  next: { name: 'Next.js', icon: RiNextjsFill, color: 'black' },
  tailwind: { name: 'Tailwind CSS', icon: RiTailwindCssFill, color: '#38bdf8' },
  typescript: { name: 'TypeScript', icon: BiLogoTypescript, color: '#3178c6' },
  react: { name: 'React', icon: BiLogoReact, color: '#117ca4' },
};

export const PROJECTS = [
  {
    name: 'AIMyPlaylist',
    description:
      'A smart music management tool to customize your playlists in seconds with a single prompt.',
    link: 'https://ai-my-playlist.vercel.app/',
    github: 'https://github.com/samuelgomez4/ai-my-playlist',
    images: ['/aimp-demo.png', '/aimp-playlist.png'],
    technologies: [
      TECHNOLOGIES.next,
      TECHNOLOGIES.tailwind,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.react,
    ],
  },
];

export type Project = (typeof PROJECTS)[number];
