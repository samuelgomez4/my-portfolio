import { contactLinks } from './constants';

export function Contact({}) {
  return (
    <section className="w-full flex flex-col px-10 gap-4">
      <h1 className="text-4xl sm:text-7xl font-bold text-balance">
        <span className="text-yellow-400">S</span>amuel <span className="text-yellow-400">G</span>
        omez <span className="text-yellow-400">S</span>
        uarez
      </h1>
      <p className="text-2xl sm:text-4xl">Software Developer and Engineer</p>
      <div className="flex gap-4 items-center">
        {contactLinks.map(({ href, title, icon: Icon }) => (
          <a
            href={href}
            title={title}
            target="_blank"
            key={title}>
            <Icon className="text-4xl" />
          </a>
        ))}
      </div>
    </section>
  );
}
