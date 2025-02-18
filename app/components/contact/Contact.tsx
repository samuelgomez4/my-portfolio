import Link from 'next/link';
import { MdMail } from 'react-icons/md';

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
        <Link
          href="mailto:example@example.com"
          title="Email me">
          <MdMail className="text-4xl" />
        </Link>
      </div>
    </section>
  );
}
