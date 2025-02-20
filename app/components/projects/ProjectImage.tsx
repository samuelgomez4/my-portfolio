export function ProjectImage({ src, alt }) {
  return (
    <div className="relative w-[400px] overflow-hidden h-96 z-0 border group">
      <img
        className="absolute top-14 -left-6 rounded-xl w-60 group-hover:-translate-x-4 group-hover:translate-y-8 transition-all duration-300"
        src="/aimp-demo.png"
        alt=""
      />
      <img
        className="absolute -z-10 rounded-xl w-60 -right-6 top-7 group-hover:translate-x-4 group-hover:-translate-y-8 transition-all duration-300"
        src="/aimp-playlist.png"
        alt=""
      />
    </div>
  );
}
