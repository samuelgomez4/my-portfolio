import { PROJECTS } from './constants';
import { ProjectItem } from './project-item/ProjectItem';

export function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      {PROJECTS.map((project) => (
        <ProjectItem
          key={project.name}
          project={project}
        />
      ))}
    </section>
  );
}
