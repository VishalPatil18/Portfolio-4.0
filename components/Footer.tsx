import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <div className="flex w-full justify-between items-center mt-10 pt-10 border-t border-t-gray-200 dark:border-t-gray-600">
      <p className="text-gray-400 inline-flex items-center">
        Design by &nbsp;
        <ExternalLink
          className="hover:underline hover:text-gray-600"
          href="https://leerob.io/"
        >
          Lee Robinson
        </ExternalLink>
        .
      </p>
      <div className="flex gap-2 text-gray-400">
        <ExternalLink
          href="https://www.linkedin.com/in/vishalrameshpatil/"
          className="hover:text-gray-700 hover:dark:text-gray-200 transition duration-150"
        >
          <AiFillLinkedin className="h-6 w-6" />
        </ExternalLink>
        <ExternalLink
          href="https://twitter.com/VishalPatil1810"
          className="hover:text-gray-700 hover:dark:text-gray-200 transition duration-150"
        >
          <AiFillTwitterCircle className="h-6 w-6" />
        </ExternalLink>
        <ExternalLink
          href="https://www.instagram.com/_vishal_._lahsiv_/"
          className="hover:text-gray-700 hover:dark:text-gray-200 transition duration-150"
        >
          <AiFillInstagram className="h-6 w-6" />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/VishalPatil18"
          className="hover:text-gray-700 hover:dark:text-gray-200 transition duration-150"
        >
          <AiFillGithub className="h-6 w-6" />
        </ExternalLink>
      </div>
    </div>
  );
}
