interface Props {
  name: string;
  images: string[];
  className?: string;
}
export function ProjectImage({ name, images, className }: Props) {
  const [image1, image2] = images;
  return (
    <div className={`relative overflow-hidden z-0  ${className}`}>
      <img
        className="absolute bottom-[5%] -left-[6%] rounded-xl w-3/5 group-hover:-translate-x-[8%] group-hover:translate-y-[5%] transition-all duration-300 shadow-[8px_2px_12px_-5px_black] group-hover:shadow-none"
        src={image1}
        alt={`An image that shows a demo of the project ${name}`}
      />
      <img
        className="absolute -z-10 rounded-xl w-3/5 -right-[6%] top-[5%] group-hover:translate-x-[8%] group-hover:-translate-y-[5%] transition-all duration-300 shadow-[8px_4px_12px_-5px_black] group-hover:shadow-none"
        src={image2}
        alt={`An image that shows a demo of the project ${name}`}
      />
    </div>
  );
}
