import React from 'react';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function SectionTitle({ icon, children }: Props) {
  return (
    <h2 className="text-3xl font-bold text-balance flex gap-4 items-center mb-6">
      <span>{icon}</span>
      <span>{children}</span>
    </h2>
  );
}
