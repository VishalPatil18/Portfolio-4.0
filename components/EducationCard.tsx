import ExternalLink from './ExternalLink';

export default function EducationCard({
  instituteName,
  degree,
  description,
  time,
  link,
  logo
}) {
  return (
    <div className=" transform hover:scale-[1.01] transition-all border border-gray-200 my-5 dark:border-gray-800 p-4 rounded-lg animate-scale">
      <div className="relative">
        <div className="relative flex items-start md:space-x-3">
          <a className="w-16 h-16 md:w-32 md:h-32" href={link}>
            <img
              className="items-center justify-center rounded-md md:flex"
              src={logo}
              alt="institute"
            />
          </a>
          <div className="w-full ml-2">
            <div className="flex items-center justify-between">
              <ExternalLink
                href={link}
                className="flex flex-col md:flex-row space-y-1 md:space-y-0"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-200  hover:underline">
                  {instituteName}
                </span>
              </ExternalLink>
              <p className="text-sm text-secondary text-gray-500">{time}</p>
            </div>
            <p className="text-gray-500 text-sm mt-1 md:mt-0">{degree}</p>
            <div>
              {description.map((desc, idx) => (
                <li
                  className="list-disc list-inside text-base text-gray-600 dark:text-gray-300"
                  key={idx}
                >
                  {desc}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
