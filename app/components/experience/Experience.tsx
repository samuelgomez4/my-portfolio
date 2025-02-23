'use client';
import { useState } from 'react';
import { experiences } from './constants';
import { ExperienceItem } from './experience-item/ExperienceItem';
import { SectionTitle } from '../SectionTitle';
import { MdWork } from 'react-icons/md';

export function Experience({}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle icon={<MdWork />}>Experience</SectionTitle>
      <div
        className={`overflow-hidden px-2 transition-all duration-500 ${!showMore ? 'h-96 [mask-image:linear-gradient(black_70%,transparent)]' : 'h-[calc-size(max-content,size)]'}`}>
        <ol className="relative border-l-2 border-gray-700">
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
      </div>
      <button onClick={() => setShowMore((prev) => !prev)}>
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </section>
  );
}
