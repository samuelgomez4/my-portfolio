interface Props {
  name: string;
  images: string[];
  className?: string;
}
export function ProjectImage({ name, images, className }: Props) {
  console.log(images);
  const [image1, image2] = images;
  return (
    <div className={`relative w-[400px] overflow-hidden h-96 z-0 border group ${className}`}>
      <img
        className="absolute top-14 -left-6 rounded-xl w-60 group-hover:-translate-x-4 group-hover:translate-y-8 transition-all duration-300"
        src={image1}
        alt={`An image that shows a demo of the project ${name}`}
      />
      <img
        className="absolute -z-10 rounded-xl w-60 -right-6 top-7 group-hover:translate-x-4 group-hover:-translate-y-8 transition-all duration-300"
        src={image2}
        alt={`An image that shows a demo of the project ${name}`}
      />
    </div>
  );
}
