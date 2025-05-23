// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';
import { PiMaskHappyDuotone } from "react-icons/pi";

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'personal', path: '/personal', icon: <PiMaskHappyDuotone /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname ? 'text-accent' : ''
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={index}
          >
            {/* Tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex z-50">
              <div className="big-white relative flex text-primary items-center p-[6px] bg-white rounded shadow-lg">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* Triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute top-1/2 -translate-y-1/2 -right-[8px]"></div>
              </div>
            </div>
  
            {/* Icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
  };
  
  export default Nav;
  