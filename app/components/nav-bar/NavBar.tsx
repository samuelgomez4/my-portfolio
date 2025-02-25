'use client';
import Link from 'next/link';
import styles from './nav.module.css';
import NAV_ITEMS from './constants';
import { Underline } from '../ui/underline/Underline';
import { useUnderline } from '../ui/underline/useUnderline';
import { useEffect } from 'react';

export function NavBar() {
  const {
    underline: hoverUnderline,
    handleMouseEnter: hover,
    handleMouseLeave: noHover,
  } = useUnderline();
  const { underline: activeUnderline, setUnderline } = useUnderline();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = document.querySelector(`a[href="#${entry.target.id}"]`) as HTMLElement;
            if (link) {
              setUnderline({ width: link.offsetWidth, x: link.offsetLeft });
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setUnderline]);

  return (
    <>
      <header className="flex justify-center sticky w-full top-4 items-center gap-4 px-8 z-10">
        <nav className={styles.nav}>
          <button
            className="text-yellow-400 font-bold text-2xl sm:text-4xl"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            SGS
          </button>
          <div
            className="flex gap-4 sm:gap-8 relative cursor-pointer"
            onMouseLeave={noHover}>
            <Underline
              className={`top-7 bg-yellow-400 z-10`}
              width={hoverUnderline.width}
              x={hoverUnderline.x}
            />
            <Underline
              className={`top-7 bg-yellow-300`}
              width={activeUnderline.width}
              x={activeUnderline.x}
            />
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3"
                title={item.title}
                onMouseEnter={hover}>
                <span className="hidden md:block">{item.label}</span>
                <div className="text-2xl flex items-end justify-center">
                  <item.icon />
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
