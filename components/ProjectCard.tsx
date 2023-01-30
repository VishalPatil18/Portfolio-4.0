import STACK_TO_ICON from '../data/icons';

export default function ProjectCard({
  title,
  description,
  link,
  projectImage,
  stack,
  brandColor,
  githubLink
}) {
  return (
    <div className=" my-6 transform hover:scale-[1.01] transition-all bg-white dark:bg-gray-900 w-full flex items-center justify-between border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="flex items-center">
        <a
          className="mr-4 w-52 md:w-72 flex-shrink-0 rounded-tl-lg rounded-bl-lg border-gray-200"
          href={link}
        >
          <span className="sr-only">{title}</span>
          <img
            src={projectImage}
            style={{ color: brandColor }}
            className="min-w-lg text-gray-900 dark:text-gray-100 object-cover overflow-hidden w-full rounded-tl-lg rounded-bl-lg"
          />
        </a>
        <div className="p-2">
          <div className="flex space-x-2">
            <a
              className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 hover:underline"
              href={link}
            >
              {title}
            </a>
          </div>
          <p className="leading-5 text-gray-700 dark:text-gray-300 ">
            {description}
          </p>
          <div className="flex flex-wrap mt-2 gap-2">
            {stack.map((stackItem, idx) => {
              const Icon = STACK_TO_ICON[stackItem];
              return (
                <span
                  key={idx}
                  className="inline-flex items-center py-1 text-xs font-semibold opacity-60 text-gray-900 dark:text-gray-200"
                >
                  <span className="mr-1">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-xs font-light capitalize"> {stackItem}</p>
                </span>
              );
            })}
          </div>
          <a
            className="mt-2 text-xs font-light text-gray-500 dark:text-gray-400 hover:underline"
            href={githubLink}
            aria-label={title}
          >
            {githubLink}
          </a>
        </div>
      </div>
    </div>
  );
}
