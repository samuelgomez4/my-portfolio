import { useState } from 'react';

export function useUnderline() {
  const [underline, setUnderline] = useState({ width: 0, x: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setUnderline({
      width: e.currentTarget.offsetWidth,
      x: e.currentTarget.offsetLeft,
    });
  };

  const handleMouseLeave = () => {
    setUnderline((prevState) => ({
      ...prevState,
      width: 0,
    }));
  };

  return { underline, handleMouseEnter, handleMouseLeave, setUnderline };
}
