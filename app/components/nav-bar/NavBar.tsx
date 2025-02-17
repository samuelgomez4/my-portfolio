import Link from 'next/link';
import styles from './nav.module.css';
import { IoIosInformationCircleOutline, IoMdContact } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { TbDeviceDesktopCode } from 'react-icons/tb';

export function NavBar({}) {
  return (
    <>
      <header className="flex justify-center fixed w-full top-4">
        <nav className={styles.nav}>
          <Link
            href="#contact"
            className="flex items-center gap-4"
            title="Contact">
            <span className={styles.nav_item}>Contact</span>
            <IoMdContact className="text-2xl" />
          </Link>
          <Link
            href="#experience"
            className="flex items-center gap-4"
            title="Experience">
            <span className={styles.nav_item}>Experience</span>
            <MdWork className="text-2xl" />
          </Link>
          <Link
            href="#projects"
            className="flex items-center gap-4"
            title="Projects">
            <span className={styles.nav_item}>Projects</span>
            <TbDeviceDesktopCode className="text-2xl" />
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-4"
            title="About">
            <span className={styles.nav_item}>About</span>
            <IoIosInformationCircleOutline className="text-2xl" />
          </Link>
        </nav>
      </header>
    </>
  );
}
