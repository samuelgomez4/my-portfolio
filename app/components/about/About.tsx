import { IoIosInformationCircleOutline } from 'react-icons/io';
import { SectionTitle } from '../SectionTitle';

export function About() {
  return (
    <section
      className=" mb-20 items scroll-mt-40"
      id="about">
      <SectionTitle icon={<IoIosInformationCircleOutline />}>About</SectionTitle>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-48 h-56 rounded-full bg-white relative overflow-hidden">
          <img
            src="/avatar.png"
            alt="An avatar of Samuel Gomez Suarez"
            className="absolute top-1 left-2 w-48"
          />
        </div>
        <div className="w-full max-w-prose flex-1">
          <p className="text-pretty">
            I'm a <span className="text-yellow-200">software developer</span> with experience
            contributing to development teams, enhancing existing projects, and improving user
            experiences. My passion for solving complex problems through programming extends beyond
            web development—
            <span className="text-yellow-200">
              I applied it in my master’s thesis to tackle an engineering challenge.
            </span>
          </p>
          <br />
          <p className="text-pretty">
            I specialize in building applications with{' '}
            <span className="text-yellow-200">React, Next.js, and Express.js</span>, leveraging{' '}
            <span className="text-yellow-200">TypeScript</span> for robust development. With a solid
            foundation in <span className="text-yellow-200">HTML, CSS, and JavaScript</span>, I
            craft responsive and intuitive user interfaces. Additionally, I utilize{' '}
            <span className="text-yellow-200">Git and GitHub</span> for version control and seamless
            team collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
