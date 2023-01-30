import { SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si';

export default function MyFavouriteTech() {
  return (
    <div className="mt-3 text-gray-600 dark:text-gray-400 mb-16 ">
      <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-6 text-black dark:text-white">
        My Favorite Tech
      </h3>
      <div className="mt-2">
        <div className="inline-flex items-center space-x-2 mr-2">
          <SiReact color={'#61DBFB'} />
          <p>React</p>
        </div>
        &nbsp; &nbsp;
        <div className="inline-flex items-center space-x-2 mr-2">
          <SiTypescript
            color={'#00008B'}
            className="text-black dark:text-white"
          />
          <p>TypeScript</p>
        </div>
        &nbsp; &nbsp;
        <div className="inline-flex items-center space-x-2 mr-2">
          <SiNextdotjs color={'#5A5A5A'} />
          <p>NextJS</p>
        </div>
      </div>
    </div>
  );
}
