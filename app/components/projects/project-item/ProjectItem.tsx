import { LinkButton } from '../../ui/LinkButton';
import type { Project } from '../constants';
import { ProjectImage } from './ProjectImage';

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  return (
    <article className="relative group flex rounded-xl overflow-hidden  shadow-xl">
      <div className="relative overflow-hidden">
        <div className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 w-2/3 aspect-video -z-10 blur-3xl" />
        <ProjectImage
          name={project.name}
          images={project.images}
          className="w-[400px] h-60 bg-white/30 rounded-xl"
        />
      </div>
      <div className="flex-1 px-8 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-lg text-gray-400 mb-3 text-pretty">{project.description}</p>
        <div className="flex gap-4 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              title={tech.name}
              className=" p-1 rounded-xl bg-white">
              <tech.icon
                style={{ color: tech.color }}
                className="text-2xl"
              />
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <LinkButton href={project.link}>View Project</LinkButton>
          <LinkButton href={project.github}>View Code</LinkButton>
        </div>
      </div>
    </article>
  );
}
