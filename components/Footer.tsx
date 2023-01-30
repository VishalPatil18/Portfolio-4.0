import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram
} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="flex w-full justify-between items-center mt-10 pt-10 border-t border-t-gray-200 dark:border-t-gray-600">
      <p className="text-gray-400 inline-flex items-center">
        Design by &nbsp;<a className="hover:underline hover:text-gray-600" href="https://leerob.io/" target="_blank">Lee Robinson</a>.
      </p>
      <div className="flex gap-2 text-gray-400">
        <a
          href="https://www.linkedin.com/in/vishalrameshpatil/"
          target="_blank"
          className="hover:text-gray-700 hover:dark:text-gray-200 transition duration-150"
        >
          <AiFillLinkedin className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com/VishalPatil1810"
          target="_blank"
          className="hover:text-gray-700 hover:dark:text-gray-200 transition duration-150"
        >
          <AiFillTwitterCircle className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/_vishal_._lahsiv_/"
          target="_blank"
          className="hover:text-gray-700 hover:dark:text-gray-200 transition duration-150"
        >
          <AiFillInstagram className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/VishalPatil18"
          target="_blank"
          className="hover:text-gray-700 hover:dark:text-gray-200 transition duration-150"
        >
          <AiFillGithub className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
