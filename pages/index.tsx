import { Suspense } from 'react';
import clsx from 'clsx';
import Image from 'next/future/image';
import Container from 'components/Container';
import MyFavouriteTech from 'components/MyFavouriteTech';
import Education from 'components/Education';
import Interests from 'components/Interests';
import Achievements from 'components/Achievements';
import Footer from 'components/Footer';

export default function Home() {
  const redGradient =
    'bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text';

  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="w-full justify-between flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Vishal Patil
              </h1>
              <h2 className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                FullStack Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I am a
                <span
                  className={clsx(
                    redGradient,
                    'transition-transform duration-500 ease-in-out hover:duration-300'
                  )}
                >
                  {' '}
                  MERN stack developer{' '}
                </span>
                currently studying in Mumbai, India. <br />I am a 22 years old
                Hustler, Learner & Explorer by heart.
              </p>
            </div>
            <div className=" sm:w-[176px] relative mb-8 sm:mb-0">
              <Image
                alt="Vishal Patil"
                height={120}
                width={120}
                src="/avatar.png"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale ml-auto"
              />
            </div>
          </div>
          <span className="h-16" />
          <Education />
          <MyFavouriteTech />
          <Interests />
          <Achievements />
          <Footer />
        </div>
      </Container>
    </Suspense>
  );
}
