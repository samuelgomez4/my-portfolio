import { IoMdLink } from 'react-icons/io';
import { ContactItems } from './ContactItems';

export function Contact({}) {
  return (
    <section
      className="flex flex-col mb-20 items-center scroll-mt-40"
      id="contact">
      <h1 className="text-4xl sm:text-6xl font-bold text-center mb-2">
        <span className="text-yellow-400">S</span>amuel <span className="text-yellow-400">G</span>
        omez <span className="text-yellow-400">S</span>
        uarez
      </h1>
      <p className="text-2xl sm:text-3xl text-center font-semibold mb-10">
        Software Developer and Engineer
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <ContactItems />
        <a
          href="https://f8gp4fwf5kvmobpb.public.blob.vercel-storage.com/Resume-Samuel-Gomez-SuPTzwdodBmZgrCJRQuBbAjmbjxu8X.pdf"
          className="bg-yellow-300 text-black px-4 py-4 rounded-full hover:bg-yellow-400 transition-colors font-semibold text-lg"
          target="_blank">
          View Resume <IoMdLink className="inline text-2xl" />
        </a>
      </div>
    </section>
  );
}
