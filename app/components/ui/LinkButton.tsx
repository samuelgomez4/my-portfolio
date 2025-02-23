interface Props {
  href: string;
  children: React.ReactNode;
}

export function LinkButton({ href, children }: Props) {
  return (
    <a
      href={href}
      className="rounded-full bg-yellow-300 text-black px-4 py-2 font-semibold hover:bg-yellow-400 transition-colors duration-300"
      target="_blank">
      {children}
    </a>
  );
}
