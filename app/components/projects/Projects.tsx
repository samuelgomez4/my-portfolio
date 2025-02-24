import { TbDeviceDesktopCode } from 'react-icons/tb';
import { PROJECTS } from './constants';
import { ProjectItem } from './project-item/ProjectItem';
import { SectionTitle } from '../SectionTitle';

export function Projects() {
  return (
    <section
      className="mb-20 scroll-mt-36"
      id="projects">
      <SectionTitle icon={<TbDeviceDesktopCode />}>Projects</SectionTitle>
      {PROJECTS.map((project) => (
        <ProjectItem
          key={project.name}
          project={project}
        />
      ))}
    </section>
  );
}
