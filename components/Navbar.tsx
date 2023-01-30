import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import NavItem from './NavItem';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <MobileMenu />
        <div className="hidden md:visible md:flex ml-[-0.60rem]">
          <NavItem href="/" text="Home" />
          <NavItem href="/experience" text="Experience" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/blogs" text="Blogs" />
          <NavItem href="/dashboard" text="Dashboard" />
          <NavItem href="/social" text="Social" />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 rounded-lg flex items-center justify-center  hover:ring-1 ring-gray-300  transition-all"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted &&
            (resolvedTheme === 'dark' ? <BsSunFill /> : <BsMoonStarsFill />)}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
