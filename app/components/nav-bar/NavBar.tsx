'use client';
import Link from 'next/link';
import styles from './nav.module.css';
import NAV_ITEMS from './constants';
import { Underline } from '../ui/underline/Underline';
import { useUnderline } from '../ui/underline/useUnderline';

export function NavBar() {
  const { underline, handleMouseEnter, handleMouseLeave } = useUnderline();

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
            onMouseLeave={handleMouseLeave}>
            <Underline
              className="bg-yellow-300 top-7"
              width={underline.width}
              x={underline.x}
            />
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3"
                title={item.title}
                onMouseEnter={handleMouseEnter}>
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
