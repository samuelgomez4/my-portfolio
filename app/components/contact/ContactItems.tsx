'use client';
import { CONTACT_LINKS } from './constants';
import { useUnderline } from '../ui/underline/useUnderline';
import { Underline } from '../ui/underline/Underline';

export function ContactItems() {
  const { underline, handleMouseEnter, handleMouseLeave } = useUnderline();

  return (
    <div
      className="flex gap-4 items-center bg-white/80 w-fit px-4 py-2 rounded-full relative"
      onMouseLeave={handleMouseLeave}>
      <Underline
        className="bg-black bottom-2"
        width={underline.width}
        x={underline.x}
      />
      {CONTACT_LINKS.map(({ href, title, color, icon: Icon }) => (
        <a
          href={href}
          title={title}
          target="_blank"
          key={title}
          style={{ color }}
          onMouseEnter={handleMouseEnter}>
          <Icon className="text-4xl" />
        </a>
      ))}
    </div>
  );
}
