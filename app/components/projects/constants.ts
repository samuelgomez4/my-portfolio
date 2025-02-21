import { FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

const TECHNOLOGIES = {
  next: { name: 'Next.js', icon: RiNextjsFill },
  tailwind: { name: 'Tailwind CSS', icon: RiTailwindCssFill },
  typescript: { name: 'TypeScript', icon: SiTypescript },
  react: { name: 'React', icon: FaReact },
};

export const PROJECTS = [
  {
    name: 'AIMyPlaylist',
    description: "A web application that generates a playlist based on the user's mood.",
    link: 'https://aimyplaylist.vercel.app/',
    images: ['/aimp-demo.png', '/aimp-playlist.png'],
    thecnologies: [TECHNOLOGIES.next, TECHNOLOGIES.tailwind],
  },
];

export type Project = (typeof PROJECTS)[number];
