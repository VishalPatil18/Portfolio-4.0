import cn from 'classnames';

export default function AchievementCard({ title, subTitle, gradient }) {
  return (
    <div
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col justify-between h-full">
          <h4 className="text-base md:text-md font-medium mb-3 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
          <p className="text-xs mt-auto md:text-sm font-medium w-full text-gray-500 dark:text-gray-200 tracking-tight">
            Issued by <br /> {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
