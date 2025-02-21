import type { Project } from '../constants';
import { ProjectImage } from './ProjectImage';

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  console.log({ project });
  return (
    <article>
      <ProjectImage
        name={project.name}
        images={project.images}
      />
    </article>
  );
}
