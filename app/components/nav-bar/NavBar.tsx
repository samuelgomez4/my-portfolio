import Link from 'next/link';
import styles from './nav.module.css';
import { IoIosInformationCircleOutline, IoMdContact } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { TbDeviceDesktopCode } from 'react-icons/tb';

export function NavBar() {
  return (
    <>
      <header className="flex justify-center sticky w-full top-4 items-center gap-4 px-8">
        <nav className={styles.nav}>
          <span className="text-yellow-400 font-bold text-2xl sm:text-4xl relative">SGS</span>
          <div className="flex gap-4 sm:gap-8">
            <Link
              href="#contact"
              className={styles.nav_item}
              title="Contact">
              <span>Contact</span>
              <div className={styles.nav_item_icon}>
                <IoMdContact />
              </div>
            </Link>
            <Link
              href="#experience"
              className={styles.nav_item}
              title="Experience">
              <span>Experience</span>
              <div className={styles.nav_item_icon}>
                <MdWork />
              </div>
            </Link>
            <Link
              href="#projects"
              className={styles.nav_item}
              title="Projects">
              <span>Projects</span>
              <div className={styles.nav_item_icon}>
                <TbDeviceDesktopCode />
              </div>
            </Link>
            <Link
              href="#about"
              className={styles.nav_item}
              title="About">
              <span>About</span>
              <IoIosInformationCircleOutline className={styles.nav_item_icon} />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
