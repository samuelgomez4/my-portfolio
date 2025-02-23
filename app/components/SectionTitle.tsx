import React from 'react';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function SectionTitle({ icon, children }: Props) {
  return (
    <h2 className="text-3xl font-bold text-balance flex gap-4 items-center">
      <span>{icon}</span>
      <span>{children}</span>
    </h2>
  );
}
