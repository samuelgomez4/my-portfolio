import { experiences } from './constants';
import { ExperienceItem } from './ExperienceItem';

export function Experience({}) {
  return (
    <section className="w-full flex flex-col px-10 gap-4">
      <h2 className="text-3xl font-bold text-balance">Experience</h2>
      <ol className="relative border-l border-gray-700">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            company={experience.company}
            date={experience.date}
            title={experience.title}
            city={experience.city}
            description={experience.description}
          />
        ))}
      </ol>
    </section>
  );
}
