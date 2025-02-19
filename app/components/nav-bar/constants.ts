import { IoIosInformationCircleOutline, IoMdContact } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { TbDeviceDesktopCode } from 'react-icons/tb';

const NAV_ITEMS = [
  {
    href: '#contact',
    title: 'Contact',
    label: 'Contact',
    icon: IoMdContact,
  },
  {
    href: '#experience',
    title: 'Experience',
    label: 'Experience',
    icon: MdWork,
  },
  {
    href: '#projects',
    title: 'Projects',
    label: 'Projects',
    icon: TbDeviceDesktopCode,
  },
  {
    href: '#about',
    title: 'About',
    label: 'About',
    icon: IoIosInformationCircleOutline,
  },
];

export default NAV_ITEMS;
