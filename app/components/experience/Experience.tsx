'use client';
import { useState } from 'react';
import { experiences } from './constants';
import { ExperienceItem } from './experience-item/ExperienceItem';
import { SectionTitle } from '../SectionTitle';
import { MdWork } from 'react-icons/md';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

export function Experience({}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="mb-20">
      <SectionTitle icon={<MdWork />}>Experience</SectionTitle>
      <div
        className={`mb-10 overflow-hidden px-2 transition-all duration-500 ${!showMore ? 'h-80 [mask-image:linear-gradient(black_70%,transparent)]' : 'h-[calc-size(max-content,size)]'}`}>
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
      <div className="flex justify-center">
        <button
          onClick={() => setShowMore((prev) => !prev)}
          title={showMore ? 'Show Less' : 'Show More'}>
          <IoIosArrowDropdownCircle
            className={`text-4xl text-yellow-300 hover:text-yellow-400  transition-all duration-300 ${showMore ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </section>
  );
}
