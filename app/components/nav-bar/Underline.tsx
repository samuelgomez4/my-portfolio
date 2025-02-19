interface Props {
  className?: string;
  width: number;
  x: number;
}

export function Underline({ className, width, x }: Props) {
  return (
    <div
      style={{
        width: width,
        transform: `translateX(${x}px)`,
      }}
      className={`h-[3px] absolute top-7 rounded left-0 transition-all duration-300 ease-in-out ${className}`}
    />
  );
}
