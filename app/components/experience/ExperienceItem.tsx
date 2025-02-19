interface Props {
  date: string;
  title: string;
  company: string;
  city: string;
  description: string[];
}

export function ExperienceItem({ date, title, company, city, description }: Props) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900" />
      <time className="mb-1 text-sm font-normal leading-none text-gray-500">{date}</time>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p>{company}</p>
      <p className="text-sm text-gray-500">{city}</p>
      <ul className="text-base font-normal text-gray-400">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
}
