import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';
import { NavBar } from './components/nav-bar/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20 max-w-5xl mx-auto">
        <Contact />
        <Experience />
      </main>
    </>
  );
}
