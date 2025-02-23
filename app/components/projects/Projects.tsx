import { TbDeviceDesktopCode } from 'react-icons/tb';
import { PROJECTS } from './constants';
import { ProjectItem } from './project-item/ProjectItem';
import { SectionTitle } from '../SectionTitle';

export function Projects() {
  return (
    <section>
      <SectionTitle icon={<TbDeviceDesktopCode />}>Projets</SectionTitle>
      {PROJECTS.map((project) => (
        <ProjectItem
          key={project.name}
          project={project}
        />
      ))}
    </section>
  );
}
