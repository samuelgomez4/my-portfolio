import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';
import { NavBar } from './components/nav-bar/NavBar';
import { ProjectImage } from './components/projects/ProjectImage';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20 max-w-5xl mx-auto px-10">
        <Contact />
        <Experience />
        <ProjectImage />
      </main>
    </>
  );
}
