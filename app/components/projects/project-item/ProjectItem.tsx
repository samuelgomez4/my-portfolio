import type { Project } from '../constants';
import { ProjectImage } from './ProjectImage';

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  console.log({ project });
  return (
    <article className="group flex gap-4">
      <ProjectImage
        name={project.name}
        images={project.images}
      />
      <div>
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
        <div className="flex gap-4">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              title={tech.name}
              className="text-4xl px-2 py-1 rounded-full">
              <tech.icon />
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.link}
            className="text-blue-500 underline">
            View Project
          </a>
          <a
            href={project.github}
            className="text-blue-500 underline">
            View code
          </a>
        </div>
      </div>
    </article>
  );
}
