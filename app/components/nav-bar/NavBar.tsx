'use client';
import Link from 'next/link';
import styles from './nav.module.css';
import NAV_ITEMS from './constants';
import { useState } from 'react';
import { Underline } from './Underline';

export function NavBar() {
  const [underline, setunderline] = useState({
    width: 0,
    x: 0,
  });
  console.log(underline);
  return (
    <>
      <header className="flex justify-center sticky w-full top-4 items-center gap-4 px-8 z-10">
        <nav className={styles.nav}>
          <span className="text-yellow-400 font-bold text-2xl sm:text-4xl">SGS</span>
          <div
            className="flex gap-4 sm:gap-8 relative cursor-pointer"
            onMouseLeave={() => {
              setunderline((prevState) => ({
                ...prevState,
                width: 0,
              }));
            }}>
            <Underline
              className="bg-yellow-300"
              width={underline.width}
              x={underline.x}
            />
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3"
                title={item.title}
                onMouseEnter={(e) => {
                  setunderline({
                    width: e.currentTarget.offsetWidth,
                    x: e.currentTarget.offsetLeft,
                  });
                }}>
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
