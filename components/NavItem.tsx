import { useRouter } from 'next/router';
import NextLink from 'next/link';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <div
        className={`content-center p-2 sm:px-3 sm:py-2 rounded-lg transition-all flex flex-row hover:cursor-pointer ${
          isActive
            ? 'bg-gray-200 dark:bg-gray-800'
            : 'hover:bg-gray-200 dark:hover:bg-gray-800'
        }`}
      >
        <span className="px-3 capsize">{text}</span>
      </div>
    </NextLink>
  );
}
export default NavItem;
