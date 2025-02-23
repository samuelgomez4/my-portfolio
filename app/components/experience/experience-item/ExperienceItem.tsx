import styles from './exp-item.module.css';

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
      <div className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-8 -start-1.5 border border-yellow-400" />
      <time className="mb-1 text-sm font-normal leading-none text-gray-500">{date}</time>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
          <p>{company}</p>
          <p className="text-sm text-gray-500">{city}</p>
        </div>
        <ul className="text-base font-normal text-gray-300 flex-[2] list-disc pl-4">
          {description.map((item, index) => (
            <li
              key={index}
              className={`${styles.list_item}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
