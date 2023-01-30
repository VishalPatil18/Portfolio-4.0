import { MdSportsCricket, MdComputer } from 'react-icons/md';
import { BiJoystick } from 'react-icons/bi';

export default function Interests() {
  return (
    <div className="mt-3 text-gray-600 dark:text-gray-400 mb-16 ">
      <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-6 text-black dark:text-white">
        Interests
      </h3>
      <div className="mt-2">
        <div className="inline-flex items-center space-x-2 mr-2">
          <MdComputer
            color={'#8A2BE2'}
            className="text-black dark:text-white"
          />
          <p>Programming</p>
        </div>
        &nbsp; &nbsp;
        <div className="inline-flex items-center space-x-2 mr-2">
          <MdSportsCricket color={'#FF4500'} />
          <p>Cricket</p>
        </div>
        &nbsp; &nbsp;
        <div className="inline-flex items-center space-x-2 mr-2">
          <BiJoystick color={'#DC143C'} />
          <p>Gaming</p>
        </div>
      </div>
    </div>
  );
}
